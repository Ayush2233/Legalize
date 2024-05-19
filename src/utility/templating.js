const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip');
const { exec } = require('child_process');
const { model} = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 
const path = require('path');
// const fs = require('fs').promises;
const fs = require('fs').promises;
const libre = require('libreoffice-convert');
const translate =require('../utility/translation')
libre.convertAsync = require('util').promisify(libre.convert);



const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('your firebase json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'storage bucket url'
});

let createDocument = async function(data,name) {
    try {
        const bucket = admin.storage().bucket();
        
        console.log(data)

        if(name.includes('Hindi'))
        {
            const tranlatedtext = await translate(data,'en','hi','user')
            console.log(tranlatedtext)
            data=tranlatedtext

        }
        

    
        const file = bucket.file(`Templates/${name}.docx`);
        const tempDocxFilePath = path.join(__dirname, `temp.docx`);
        const tempPdfFilePath = path.join(__dirname, `temp.pdf`);
        
        // Download the file to a buffer
        const [fileBuffer] = await file.download();
        

        const zip = new PizZip(fileBuffer);

        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true
        });

        doc.render(data);
        
        const buf = doc.getZip().generate({
            type: 'nodebuffer',
            compression: 'DEFLATE'
        });

        await fs.writeFile(tempDocxFilePath, buf);
        const ext = 'pdf';
        const docxBuf = await fs.readFile(tempDocxFilePath);
        let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
        // await fs.writeFile(tempPdfFilePath, pdfBuf);
        
        const user = data.user
        const users = JSON.parse(user)
        
        const storageFileName = `_${name+Date.now()}.pdf`; // Unique filename
        const storageFilePath = `${users.uid}/${storageFileName}`;
        const uuid = uuidv4();


        await bucket.file(storageFilePath).save(pdfBuf, {
            metadata: {
                metadata: {
                    firebaseStorageDownloadTokens: uuid,
                },
                // contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                contentType: 'application/pdf'
            }
        });

        // fs.unlinkSync(tempDocxFilePath);
        // fs.unlinkSync(tempPdfFilePath);

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

        const [url] = await bucket.file(storageFilePath).getSignedUrl({
            action: 'read',
            expires:expirationDate
        });
        console.log('Modified document uploaded to Firebase Storage:', storageFilePath);
        return url;

    } catch (err) {
        console.error('Error:', err);
    }
};

let getFiles= async function()
{
    const bucket = admin.storage().bucket();
    const files = await bucket.getFiles({ prefix: 'GlobalUser/' });
    console.log(files)

}

function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Command execution error: ${stderr}`);
                reject(error);
            } else {
                console.log('Command executed successfully.');
                resolve();
            }
        });
    });
}


module.exports=createDocument;


// let createDocument = function (data)
// {
//     const templateFile = fs.readFileSync('../public/Templates/sample.docx', 'binary');

//     const zip = new PizZip(templateFile);
    
//     const doc = new Docxtemplater(zip, {paragraphLoop: true,linebreaks: true,});

//     doc.render(data);

//     const buf = doc.getZip().generate({
//         type: "nodebuffer",
//         compression: "DEFLATE",
//     });

//     const outputFile = 'output.docx';
//     fs.writeFileSync(outputFile, buf);
//     console.log('Modified document saved as:', outputFile);

// }









