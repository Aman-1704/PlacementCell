const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        uniqe: true
    },
    date:{
        type: String,
        uniqe: true,
    },
    students:[
        {
            student:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Student"
            },
            result:{
                type:String,
                enum:[
                    "Selected", 
                    "Not Selected", 
                    "On Hold", 
                    "Interview Pending"
                ]
            }
        }
    ]
},{
    timestamps: true
});

const Company = mongoose.model('Company', CompanySchema);

module.exports=Company;