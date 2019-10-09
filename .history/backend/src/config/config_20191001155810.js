module.exports = {
    port: process.env.PORT || 3001,
    db: {
      database: process.env.DB_NAME || 'omnistack',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      options: {
        dialect: process.env.DIALECT || 'mysql',
        host: process.env.HOST || 'localhost'
        // logging: false
      }
    }
  }
  