const express = require("express")
const cors = cors("cors")
const routes = require("./routes/routes")

require("dotenv").config()

const app = express()

app.use(json())
app.use(cors())
app.use(routes)

export default app

 