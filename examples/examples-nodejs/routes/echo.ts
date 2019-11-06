import { Router } from 'express'
import * as echo from '../Controllers/output.js'

const router = Router()


router.get('/echo', echo.echo)

module.exports = router