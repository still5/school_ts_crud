//environmental variables and configuration related stuff (use dotenv npm package)
declare module 'pg'
const env = require('dotenv').config({path: './config/.env'})