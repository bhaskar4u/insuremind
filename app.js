const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ApiRouter = require('./routes/router');
const csvModel = require('./model/csv');
const csv = require('csvtojson');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


const app = express();
const PORT = process.env.PORT || 4000;

mongoose = require('./db/mongoose');



app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'upload')))
app.use(ApiRouter)


app.post('/csv', upload.single('csv'), (req, res) => {
    csv()
        .fromFile(req.file.path)
        .then((jsonObj) => {
            console.log(jsonObj);
            const agent = async () => {
                await csvModel.agent.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })
                return agent;
            }
            agent();
            const user = async () => {
                await csvModel.user.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })

            }
            user();
            const userAccount = async () => {
                await csvModel.userAccount.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })
            }
            userAccount()

            const policyCategory = async () => {
                await csvModel.policyCategory.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })
            }
            policyCategory()

            const policyCarrier = async () => {
                await csvModel.policyCarrier.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })
            }
            policyCarrier()

            const policyInfo = async () => {
                await csvModel.policyInfo.insertMany(jsonObj, (err, data) => {
                    if (err) {
                        res.send("error occured", err);

                    } else {
                        res.send(data)
                    }
                })
            }
            policyInfo()

        })


})

app.get('/getlist/:id', async (req, res) => {
    csvModel.policyInfo.find({ policy_number: req.params.id }).then(doc => {
        res.send(doc)
    }).catch(err => {
        res.send(err)
    })
})




app.listen(PORT, (err) => {
    if (err) {
        console.log('Server Not Started', err);

    } else {
        console.log('Server Started at Port', PORT);

    }
})
