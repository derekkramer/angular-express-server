const express = require('express')
const webRoutes = require('./web/routes')

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static('public'))

app.use('/', webRoutes)

app.listen(port, () => console.log('Listening on port ' + port))
