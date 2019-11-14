import * as express from "express"
import { Router } from 'express'
const app = express();
app.use(express.json())
app.use('/', require('./routes/echo'))




app.listen(8080, () => {
  console.log(`server running on port ${8080}`);
});


export default app
