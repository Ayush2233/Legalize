const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for metadata fields
const MetadataFieldSchema = new Schema({
    type: { type: String, required: true },
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    validations: [{
        name: { type: String, required: true },
        validator: { type: String, required: true },
        message: { type: String, required: true }
    }]
}, { _id: false }); 

const SectionSchema = new Schema(
    {
        name:{type:String,required:true},
        fields:{type:Array,of:MetadataFieldSchema}
    },{ _id: false }

)

// Define schema for the document
const DocumentSchema = new Schema({
    document_name: { type: String, required: true },
    category: { type: String, required: true },
    about:{type:String, required:true},
    pdf:{type:String,required:true},
    language:{type:String,required:true},
    thumbnail:{type:String,required:true},
    language:{type:String,required:true},
    sections: { type: Array, of: SectionSchema }
});

// Create model from schema
const DocumentModel = mongoose.model('Document', DocumentSchema);

module.exports = DocumentModel;
