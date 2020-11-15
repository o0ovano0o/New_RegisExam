// require('dotenv').config();

// const development = {
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false,
//       require:true
//     },
//   },
//   pool: {
//     min: 2,
//     max: 10,
// },
// searchPath: ["public"],
// // pool: isDev ? { max: 4 } : { min: 4 },
// asyncStackTraces: true,
// };

// module.exports = {
//   development,
//   production: development,
// };


// // const { Pool } = require('pg');

// // const pool = new Pool({
// //   connectionString: process.env.DATABASE_URL,
// //   ssl: {
// //     rejectUnauthorized: false
// //   }
// // });

const development = {
  client: 'pg',
  connection: {
    user: 'uqhumdashdqieg',
    password: '5a0a6876cd265a20148fcb4c7c33dbfb364b25c58492b2ef0ef0820a721a6c0d',
    host: 'ec2-54-246-89-234.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd4hi7j4oht1ghh',
    ssl: {
      rejectUnauthorized: false,
      require:true
    },
  },
}
module.exports = {
  development,
  production:development
};
