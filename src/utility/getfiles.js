const { model} = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 
const path = require('path');
// const fs = require('fs').promises;
const fs = require('fs').promises;

const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// const serviceAccount = require('../legalize-e194b-firebase-adminsdk-2hy8y-1c20a8f69a.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: 'gs://legalize-e194b.appspot.com'
// });

let getFiles= async function(uid)
{
    const bucket = admin.storage().bucket();
    const files = await bucket.getFiles({ prefix: `${uid}` });
    const filesJSON = [];
    for (const file of files[0]) {
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2500' // Adjust the expiration date as needed
        });

        filesJSON.push({
            name: file.name,
            downloadUrl: url
          });
        }

    console.log(files)
    return filesJSON

}

// x=getFiles('Ih9wx8SP0vXZDHXABvRYL34OWJe2')
// console.log(x)

module.exports=getFiles;