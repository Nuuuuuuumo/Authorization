const mongoose = require('mongoose')
const colors = require('colors')

const dbConnection = async (dbUrl) => {
    try {
        await mongoose
            .connect(dbUrl)
            .then(() => console.log(colors.bgBlue('Data base connected')), {
                userNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .catch((e) => console.log(colors.bgRed(`Error: ${e.message}`)))
    } catch (e) {
        console.log(colors.bgRed(`Error: ${e.message}`))
    }
}
module.exports = dbConnection