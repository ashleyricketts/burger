var mysql = require('mysql');


var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '5752199',
		database: 'burgers_db'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to database as id ' + connection.threadId + '\n\n');
});


module.exports = connection;