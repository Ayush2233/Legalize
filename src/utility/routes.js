const express = require('express');
const router = express.Router();
const templating = require("../utility/templating")
const documentModel= require("../database/schema")
const data = require('../utility/data');
const createDocument = require('../utility/templating');
const getFiles = require('../utility/getfiles');



const temp = new documentModel( 
  {
    "document_name":"Notice",
    "category":"Property",
    "about":"Legal notice for recovery of money is a formal intimation between two people warning the other before legal action is initiated to get their due payment. Believe it or not, you can also send a legal notice for recovery of money from a friend, in case he/she owes you a lot. To recover money from people who owe it to you, the role and importance of a legal notice for recovery of due becomes important. Legal notice for refund of money can be filed for anyone from a dealer to an employee, tenant, friend, company, bank, etc. One may send a notice for recovery of money from your employer, friend or any other party who owes you money. The first step in recovery should be to send a legal notice since most recovery cases get resolved in this step itself and you do not need to proceed to Court. One must send a well-drafted and legally sound notice to ensure that you get a prompt response on your notice and you have maximum opportunity to recover your money.",
    "pdf":"https://firebasestorage.googleapis.com/v0/b/legalize-e194b.appspot.com/o/Notice-for-Recovery-of-Money.pdf?alt=media&token=bdfa7c6a-5334-4474-a7c1-f5e18aec6e18",
    "thumbnail":"https://firebasestorage.googleapis.com/v0/b/legalize-e194b.appspot.com/o/Thumbnails%2Fcontractor.jpg?alt=media&token=58372e0e-fb19-43a2-85d4-c9f58c702c66",
    "sections": [
      {
        "name":"Recipient Details",
        "fields":
        [
          {
            "type": "text",
            "label": "Reference Number",
            "name": "reference_number",
            "value": "",
            "placeholder": "Enter Reference Number",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Reference number is required"
              }
            ]
          },
  
          {
            "type": "date",
            "label": "Current Date",
            "name": "current_date",
            "value": "",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Current date is required"
              }
            ]
          },
  
          {
            "type": "text",
            "label": "Recipient's Name",
            "name": "recipient_name",
            "value": "",
            "placeholder": "Enter Recipient's Name",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's name is required"
              }
            ]
          },
          {
            "type": "text",
            "label": "Recipient's Address",
            "name": "recipient_address",
            "value": "",
            "placeholder": "Enter Recipient's Address",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's address is required"
              }
            ]
          }
        ]
      },
      {
        "name":"Client Detalis",
        "fields":[
          {
            "type": "text",
            "label": "Client's Name",
            "name": "client_name",
            "value": "",
            "placeholder": "Enter Client's Name",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Client's name is required"
              }
            ]
          },
  
          {
            "type": "text",
            "label": "Client Representative",
            "name": "client_representative",
            "value": "",
            "placeholder": "Enter client_representative/authorized_officer",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "client_representative/authorized_officer is required"
              }
            ]
          }
        ]
      },{
        "name":"Recipient Details",
        "fields":
        [
          {
            "type": "text",
            "label": "Reference Number",
            "name": "reference_number",
            "value": "",
            "placeholder": "Enter Reference Number",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Reference number is required"
              }
            ]
          },
  
          {
            "type": "date",
            "label": "Current Date",
            "name": "current_date",
            "value": "",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Current date is required"
              }
            ]
          },
  
          {
            "type": "text",
            "label": "Recipient's Name",
            "name": "recipient_name",
            "value": "",
            "placeholder": "Enter Recipient's Name",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's name is required"
              }
            ]
          },
          {
            "type": "text",
            "label": "Recipient's Address",
            "name": "recipient_address",
            "value": "",
            "placeholder": "Enter Recipient's Address",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's address is required"
              }
            ]
          }
        ]
      },{
        "name":"Recipient Details",
        "fields":
        [
          {
            "type": "text",
            "label": "Reference Number",
            "name": "reference_number",
            "value": "",
            "placeholder": "Enter Reference Number",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Reference number is required"
              }
            ]
          },
  
          {
            "type": "date",
            "label": "Current Date",
            "name": "current_date",
            "value": "",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Current date is required"
              }
            ]
          },
  
          {
            "type": "text",
            "label": "Recipient's Name",
            "name": "recipient_name",
            "value": "",
            "placeholder": "Enter Recipient's Name",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's name is required"
              }
            ]
          },
          {
            "type": "text",
            "label": "Recipient's Address",
            "name": "recipient_address",
            "value": "",
            "placeholder": "Enter Recipient's Address",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's address is required"
              }
            ]
          }
        ]
      },{
        "name":"Recipient Details",
        "fields":
        [
          {
            "type": "text",
            "label": "Reference Number",
            "name": "reference_number",
            "value": "",
            "placeholder": "Enter Reference Number",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Reference number is required"
              }
            ]
          },
  
          {
            "type": "date",
            "label": "Current Date",
            "name": "current_date",
            "value": "",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Current date is required"
              }
            ]
          },
  
          {
            "type": "text",
            "label": "Recipient's Name",
            "name": "recipient_name",
            "value": "",
            "placeholder": "Enter Recipient's Name",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's name is required"
              }
            ]
          },
          {
            "type": "text",
            "label": "Recipient's Address",
            "name": "recipient_address",
            "value": "",
            "placeholder": "Enter Recipient's Address",
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Recipient's address is required"
              }
            ]
          }
        ]
      },

    ]
  }
    )

// router.get('/',  (req, res) => {
    
//       res.send("Hello");
//   });

//  GET ALL DOCUMENTS

router.get('/getalldoc',(req,res)=>
{
    documentModel.find().then((data) => {
        console.log(data);
        res.send(data);
       }).catch((err)=>{console.log(err)})
})

// GET DOCUMENTS BY CATEGORY
router.get('/getdocument/:category',(req,res)=>
{
  const reqParam = req.params.category;
  var query = {category: reqParam };

  documentModel.find(query).then((data) => {
        // console.log(data);
        res.send(data);
       }).catch((err)=>{console.log(err)})
})

router.get('/document/:name',(req,res)=>
{
  const reqParam = req.params.name;
  var query = {document_name: reqParam };

  documentModel.findOne(query).then((data) => {
        // console.log(data);
        res.send(data);
       }).catch((err)=>{console.log(err)})
})

router.get('/myroute',(req,res)=>
  {
    const reqParam = req.params.name;
    const reqParam1 = req.params.language;
    var query = {document_name: reqParam ,language:reqParam1};
  
    documentModel.findOne(query).then((data) => {
          // console.log(data);
          res.send(data);
         }).catch((err)=>{console.log(err)})
  })

// SAVE DOCUMENT TO THE DATABASE
router.get('/save',(req,res)=>
{temp.save().then(() => {
  console.log('User created');
  res.send("Data entered")}).catch((err) => 
  {console.log(err)});})

// PROCESS DOCUMENT
router.post('/processdocument',(req,res)=>
{
    const jsonBody = req.body;
    console.log(jsonBody);
    createDocument(jsonBody);
    res.status(201).send({"message":"Data received and processed successfully!"});
})

router.post('/generate/:docname',async (req,res)=>
{
    const reqParam = req.params.docname;
    const jsonBody = req.body;

    
          

    // console.log(reqParam);
    // console.log(jsonBody);
    const url = await createDocument(jsonBody,reqParam);
    console.log(url);

    res.status(201).json({url});
})

router.get('/getfiles/:uid',async (req,res)=>
{
    const reqParam = req.params.uid;
    const files=await getFiles(reqParam);
    res.status(201).send(files);
})


  
  


module.exports = router;
