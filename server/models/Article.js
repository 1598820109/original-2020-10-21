const mongoose = require('mongoose');
const dayjs = require('dayjs');

const schema = new mongoose.Schema({

        name:{type:String},

        avatar:{type:String},

        imageUrl:{type:String},

        content:{type:String},

        info:{type:String},

        date:{
            type:String,

            default: dayjs(new Date()).format('YYYY-MM-DD')


        },

        sorts:[{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}]

})

module.exports = mongoose.model('Article',schema);

