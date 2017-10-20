const restify = require('restify')

const app = restify.createServer({})
app.pre(restify.pre.sanitizePath())
// app.use(restify.CORS())
// app.use(restify.bodyParser())
// app.use(restify.queryParser())

app.get('/', (req, res, next) => {
  res.end(`meow =^_^=`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('listening on', port)
})

// meow...
