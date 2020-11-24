//connecting to localhost
export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/ShoppingCart',
    JWT_SECRET: process.env.JWT_SECRET ||  'somethingsecret'
}