const {Router} = require('express')
const {CreateUser, loginUser} = require('../Controller/UserController')

const router = Router()

router.route('/register').post(CreateUser)
router.route('/login').post(loginUser)


module.exports = router;