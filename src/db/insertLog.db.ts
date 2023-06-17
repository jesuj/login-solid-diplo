import * as mysql from 'mysql2/promise'

export async function insertLog (value: string) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'db_login',
      database: 'db_login'
    })
    // Insertar el registro en la tabla Log
    const query = 'INSERT INTO Log (date, value) VALUES (?, ?)'
    const currentDateTime = new Date()
    await connection.execute(query, [currentDateTime, value])

    console.log('Registro insertado correctamente en la BD')
    await connection.end()
    console.log('Conexión cerrada')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}
