import express from 'express'

const router= express.Router();

import {register} from '../controllers/auth.js'
router.post('/register', register);

//export the router
module.exports =router;