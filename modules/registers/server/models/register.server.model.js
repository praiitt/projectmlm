'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Register Schema
 */
var RegisterSchema = new Schema({

  sponser_id: {
    type: Number,
    trim: true
  },
 
  side: {
    type: String,
    trim: true
  },
  e_pin: {
    type: String,
    trim: true
  },

 product_package: {
    type: String,
    trim: true
  },

  account_name: {
  
    first_name:{type:String, trim: true},
    second_name:{type:String, trim: true}
   
  },

  father_name: {
    first_name:{type:String, trim: true},
    second_name:{type:String, trim: true}
  },
  dob: {
    type: Date,
    default: Date.now,
    trim: true
  },
  gender: {
    type: [{
      type: String,
      enum: ['male', 'female', 'transgender']
    }],
    trim: true

  },
  email: {
    type: String,
    trim: true
  },
  mobile: {
    type: Number,
    trim: true
  },
  your_address: {
    type: String,
    trim: true
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip_code: {
    type: Number,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  e_pin: {
    type: Number,
    trim: true
  },
co_applicant_name: {
  type: String,
  trim: true
},

co_applicant_relation: {
  type: String,
  trim: true
},
co_applicant_dob: {
  type: Date,
  default: Date.now,
  trim: true
},
pan_no: {
  type: Number,
  trim: true
},
ac_type: {
  type: String,
  trim: true
},
bank_name: {
  type: String,
  trim: true
},
bank_branch_name: {
  type: String,
  trim: true
},
ac_holder_name: {
  type: String,
  trim: true
},
ac_no: {
  type: Number,
  trim: true
},
ifs_code: {
  type: Number,
  trim: true
},

accept_all_terms_and_conditions: {
  type: Boolean
}
  
});

mongoose.model('Register', RegisterSchema);
