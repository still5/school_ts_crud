//environmental variables and configuration related stuff (use dotenv npm package)
import dotenv from 'dotenv'
export const env = dotenv.config({path: '.env'});