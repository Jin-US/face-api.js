import { Router } from 'express'
import * as echo from '../Controllers/output'


const router = Router()

router.get('/echo', echo.echo)
router.get('/hi', function(req, res) {
  res.send('hello world');
});
module.exports = router
