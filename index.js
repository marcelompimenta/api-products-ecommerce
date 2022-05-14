const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extend: false }))
app.use(express.json())
app.use(cors())

let dataBase = [
    { '1': { nome: 'Cliente 1', idade: '20' } },
    { '2': { nome: 'Cliente 2', idade: '22' } },
    { '3': { nome: 'Cliente 3', idade: '23' } }
]

app.get('/', (req, res) => {
    return res.json(dataBase)
})

app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})
