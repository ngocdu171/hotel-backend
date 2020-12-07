const Pool = require('pg').Pool

const connection = new Pool({
  user: 'jhstrlqovdwrjo',
  host: 'ec2-54-170-123-247.eu-west-1.compute.amazonaws.com',
  database: 'dd6dteuo1kp416',
  password: '96bddc77dab95c632984c11c3e2d76f13e16e176848ad10cca54340d2dcd3e59',
  port: 5432,
})
module.exports = connection;