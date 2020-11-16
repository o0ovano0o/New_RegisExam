const development = {
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'nhom05',
    host: '104.248.149.21',
    port: 31388,
    database: 'DatabaseNhom5',

  },
}
module.exports = {
  development,
  production:development
};
