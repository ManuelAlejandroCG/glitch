const http = require("http")

const server = http.createServer((peticion, respuesta) => {
    const now = new Date()

    let mensaje ="Buenas noches"
    if (now.getHours()>=6 && now.getHours<= 12) mensaje ="Buenos dias"
    else if (now.getHours()>12 && now.getHours<= 19) mensaje ="Buenas tardes"

    respuesta.end(mensaje)
})

const connectedServer = server.listen(8000, ()=>{
    console.log(`serveer running...`);
})