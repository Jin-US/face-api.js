
import * as express from "express"
import { Router } from 'express'

const app = express();

app.use('/', require('./routes/echo'))



interface Err extends Error {
  status: number
  data?: any
  result?: any
}

app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  let err = new Error('Not Found') as Err
  err.status = 404
  next(err)
})

// error handle
app.use(function (err: Err, req: express.Request, res: express.Response, next: express.NextFunction) {
  // render the error page
  res.status(err.status || 500)
  res.json({
    message: err.message,
    data: err.data
  })
})

app.listen(8081, () => {
  console.log('Example app listening on port 8081!')
})
export default app
