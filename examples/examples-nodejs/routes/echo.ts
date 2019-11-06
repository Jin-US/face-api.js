import { Router } from 'express'
import * as echo from '../Controllers/output'

const router = Router()


router.get('/echo', echo.echo)

module.exports = router