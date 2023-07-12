const http = require('http');
// const { constants } = require('http2')

const compra = [
  { id: 15},
  { id: 23},
  { id: 38},
  { id: 96},
  { id: 119},
  { id: 140},
]

const minhaUrl = "/"

http.createServer(
  (req, res) => {
    const { method, url } = req;

    console.log(url === minhaUrl)

    if (method === 'GET' && url === minhaUrl) {
      console.log("batman");
      res.statusCode = 200
      res.end(JSON.stringify(compra));
      console.log("funciona");
}

  if (method === 'DELETE' &&  url === minhaUrl) {
    // const mensagem = "Parabéns, agora você já pode iniciar uma nova rifa!"
    console.log('FLASH')
    compra.splice(0, compra.length);
    res.statusCode = 204;
    console.log('peixonauta')
    res.end( {body: {message: 'dsfsfsdfsdfsd'}})

    // res.end(JSON('Parabéns, agora você já pode iniciar uma nova rifa!'))
}

  }
).listen(3000, console.log('lendo servidor 3000'))