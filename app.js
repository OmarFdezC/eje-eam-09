//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones - Respuestas para el cliente (Chrome, Firefox, Imsonia, Edge, Opera)
app.get("/",(req,res)=>{
    res.send('Página principal. Servidor en Node.js con express')
})
app.get('*',(req,res)=>{
    res.send('404 | Página no encontrada');
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})