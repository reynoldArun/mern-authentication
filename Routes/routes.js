const {Router} = require('express')
const {CreateUser} = require('../Controller/UserController')

const router = Router()

router.route('/register').post(CreateUser)


module.exports = router;