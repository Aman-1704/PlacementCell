const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    collegename:{
        type :String ,
        required:true,
        uniqe:true
    },
    email:{
        type: String,
        uniqe: true,
        required: true
    },
    batch:{
        type: String,
        uniqe: true,
        required: true
    },
    dsascore:{
        type: String,
        required: true
    },
    webdevscore:{
        type: String,
        required: true
    },
    reactscore:{
        type: String,
        required: true
    },
    interviews:[
        {
            companyname:{
                type:String,
                unique:true
            },
            scheduledate:{
                type:String,
                unique:true
            },
            result:{
                type:String,
                enum:[
                    "Selected",
                    "Not Selected",
                    "On Hold",
                    "Interview Pending"
                ],
            }
        }
    ]
},{
    timestamps: true
});

const Student = mongoose.model('Student', StudentSchema);

module.exports=Student;