const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {    
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    // SEO Meta Fields
    metaTitle: {
        type: String,
        default: ''
    },
    metaDescription: {
        type: String,
        default: ''
    },
    metaKeywords: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
