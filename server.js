const express = require ("express")

const app = express()
const PORT = process.env.PORT || 8080
let visitas =0

app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'> Holas </h1><h2> puede acceder a  /tutores o / visitas</h2>")
})

app.get("/tutores", (request, response)=>{
    response.send({mensaje:"saludos a los tutores"})
})

app.get("/visitas", (request, response)=>{
    visitas++
    response.send(`se visitio este sitio ${visitas} veces`)
})
const server = app.listen(PORT, ()=>{
    console.log(`Server listening [${PORT}]....`)
})

server.on("error", e=> console.log (`Error on server`, e))