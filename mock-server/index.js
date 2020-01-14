const express = require("express")
const app = express()
const path = require('path')

app.all('/api/*', (req, res) => {
    const fileName = req.params[0]

    const pathToFile = path.resolve(
        __dirname,
        `./jsons/${fileName}.json`
    )

    res.header('Content-Type', 'application/json').sendFile(pathToFile)
})

app.listen(3000)
