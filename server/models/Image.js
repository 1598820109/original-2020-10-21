const mongoose = require('mongoose');

const schema = new mongoose.Schema({

        title:{type:String},
    
        imageUrl:{type:String},

        // 数据库查询分类
        
        date:{
            type:String,

            default: new Date().toLocaleDateString(),
        },

        // 分类
        parent:{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}


})


module.exports = mongoose.model('Image',schema);