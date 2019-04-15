const mongoose = require('mongoose')

const File = new mongoose.Schema({
    title: {
        type: String,
        requireL: true,
    },
    path: {
        type:String,
        requireL: true,
    },
    
    files: [
        
    ]
}, {
    timestamps: true

}); 

module.exports = mongoose.model('File', File);

    


