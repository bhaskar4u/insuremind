const csvModel = require('../model/csv');
// const csv = require('csvtojson');
// const path = require('path')


module.exports = {
    //     uploadCsv: async (req, res) => {
    //         csv()
    //             .fromFile(req.file.path)
    //             .then((jsonObj) => {
    //                 console.log(jsonObj);
    //                 const agent = async () => {
    //                     await csvModel.agent.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })
    //                     return agent;
    //                 }
    //                 agent();
    //                 const user = async () => {
    //                     await csvModel.user.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })

    //                 }
    //                 user();
    //                 const userAccount = async () => {
    //                     await csvModel.userAccount.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })
    //                 }
    //                 userAccount()

    //                 const policyCategory = async () => {
    //                     await csvModel.policyCategory.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })
    //                 }
    //                 policyCategory()

    //                 const policyCarrier = async () => {
    //                     await csvModel.policyCarrier.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })
    //                 }
    //                 policyCarrier()

    //                 const policyInfo = async () => {
    //                     await csvModel.policyInfo.insertMany(jsonObj, (err, data) => {
    //                         if (err) {
    //                             res.send("error occured", err);

    //                         } else {
    //                             res.send(data)
    //                         }
    //                     })
    //                 }
    //                 policyInfo()

    //             })


    //     }

    // getListByPolicyNumber: async () => {
    //     csvModel.policyInfo.find({ policy_number: req.params.id }).then(doc => {
    //         res.send(doc)
    //     }).catch(err => {
    //         res.send(err)
    //     })
    // }
}