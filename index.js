const express = require ("express")
const route = require("./indexRoutes.js")
const app = express()
const PORT = 8000
app.use(express.json())
app.use("/",route)
app.listen(PORT,()=>console.log(`App is Listening port ${PORT}`)
)
