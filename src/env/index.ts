import * as dotenv from 'dotenv';

dotenv.config();
const RATE_TTL = +process.env.RATE_TTL || 60;
const RATE_LIMIT = +process.env.RATE_LIMIT || 100;
const APP_PORT = +process.env.APP_PORT || 3000;
const MERCHANT_ID = +process.env.MERCHANT_ID || 1;
const COIN_SERVICE_URL = +process.env.COIN_SERVICE_URL || '';

export { RATE_LIMIT, RATE_TTL, APP_PORT, MERCHANT_ID, COIN_SERVICE_URL };
