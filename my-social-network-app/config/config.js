/* eslint-disable no-undef */
const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 9000,
 jwtSecret: process.env.JWT_SECRET || "ITS_my_secret_key"
}

export default config