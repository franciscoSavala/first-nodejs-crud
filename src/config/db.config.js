const config = {
    HOST: "localhost",
    USER: "SA",
    PASSWORD: "yourStrong(!)Password",
    DB: "firstnodejs",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = config;