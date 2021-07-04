const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')

// Load environment configuration
dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is up and running on port " + port);
})