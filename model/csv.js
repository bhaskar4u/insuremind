const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentSchema = new Schema({
    agent: {
        type: String
    }
});

const userSchema = new Schema({
    firstname: {
        type: String
    },
    dob: {
        type: Date
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    gender: {
        type: String
    },
    userType: {
        type: String
    },
    email: {
        type: String
    },
});

const userAccountSchema = new Schema({
    account_name: {
        type: String
    }
});

const policyCategorySchema = new Schema({
    category_name: {
        type: String
    }
});

const policyCarrierSchema = new Schema({
    company_name: {
        type: String
    }
});

const policyInfoSchema = new Schema({
    policy_number: {
        type: String
    },
    policy_start_date: {
        type: Date
    },
    policy_end_date: {
        type: Date
    },
    category_name: {
        type: String
    },
    collecton_id: {
        type: Number,
        auto: true
    },
    companyCollection_id: {
        type: Number,
        auto: true
    },
    user_id: {
        type: String,
        auto: true
    }
});



var agent = mongoose.model('Agent', agentSchema);
var user = mongoose.model('User', userSchema);
var userAccount = mongoose.model('UsersAccount', userAccountSchema);
var policyCategory = mongoose.model('PolicyCategory', policyCategorySchema);
var policyCarrier = mongoose.model('PolicyCarrier', policyCarrierSchema);
var policyInfo = mongoose.model('PolicyInfo', policyInfoSchema);

module.exports = {
    agent, user, userAccount, policyCategory, policyCarrier, policyInfo
}