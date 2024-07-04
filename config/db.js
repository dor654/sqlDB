// config/db.js
const sql = require("mssql");

const config = {
  user: "Dani",
  password: "foo",
  server: "DESKTOP-HM6TIML", // e.g., 'DESKTOP-HM6TIML'
  port: 1433, // Use the correct port
  database: "UserAuth",
  options: {
    encrypt: false, // For Azure, set to false for local development
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

console.log("Database Config:", config);

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (err) {
    console.error("Database connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
