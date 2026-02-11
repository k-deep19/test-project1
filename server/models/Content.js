const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    videoUrl: { type: String, required: true },
    duration: { type: Number, required: true }, // duration in seconds
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: [{ type: String }], // Array of comment strings
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);