// models/User.js
const sql = require("mssql");

class User {
  static async findByEmail(email) {
    const request = new sql.Request();
    const result = await request.query(
      `SELECT * FROM Users WHERE email = '${email}'`
    );
    return result.recordset[0];
  }

  static async create(user) {
    const { email, password, role } = user;
    const request = new sql.Request();
    await request.query(
      `INSERT INTO Users (email, password, role) VALUES ('${email}', '${password}', '${role}')`
    );
  }

  static async findById(id) {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM Users WHERE id = ${id}`);
    return result.recordset[0];
  }

  static async update(id, user) {
    const { email, password, role } = user;
    const request = new sql.Request();
    await request.query(
      `UPDATE Users SET email = '${email}', password = '${password}', role = '${role}' WHERE id = ${id}`
    );
  }

  static async delete(id) {
    const request = new sql.Request();
    await request.query(`DELETE FROM Users WHERE id = ${id}`);
  }

  static async findAll() {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM Users`);
    return result.recordset;
  }
}

module.exports = User;
