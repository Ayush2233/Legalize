data=[
    {
      "type": "date",
      "label": "Date",
      "name": "date",
      "value": "",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Date is required"
        }
      ]
    },
    {
        "type": "text",
        "label": "Disclosor Name",
        "name": "disclosor_name",
        "value": "",
        "placeholder":"Enter Disclosor Name",
        "validations": [
        {
            "name": "required",
            "validator": "required",
            "message": "Name is required"
        }
      ]
    },
    {
        "type": "text",
        "label": "Disclosor Jurisdiction",
        "name": "disclosor_jurisdiction",
        "value": "",
        "placeholder":"Enter Disclosor Jurisdiction",
        "validations": []
    },
    {
        "type": "text",
        "label": "Recipient Name",
        "name": "recipient_name",
        "placeholder":"Recipient Name",
        "value":"",
        "validations": []
    },
    {
        "type": "text",
        "label": "Recipient Jurisdiction",
        "name": "recipient_jurisdiction",
        "value": "",
        "placeholder":"Enter Recipient Jurisdiction",
      
        "validations": [
        {
            "name": "required",
            "validator": "required",
            "message": "Jurisdiction is required"
        }
      ]
    }
  ];

module.exports = data;