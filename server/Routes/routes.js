const {Router} = require('express')
const {CreateUser, loginUser, DashBoard} = require('../Controller/UserController')
const CheckAuthentication = require('../util/Auth')

const router = Router()

router.route('/register').post(CreateUser)
router.route('/login').post(loginUser)
router.route('/dashboard').get(CheckAuthentication, DashBoard)


module.exports = router;