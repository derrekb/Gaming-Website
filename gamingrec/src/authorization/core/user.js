const pool = require('./pool');
const bcrypt = require('bcrypt');

/*
*
*Queries user into databse
*
*/


function User() {};

User.prototype = {
    //Find use data by id or username.dashboard
    find : function(user = null, callback)
    {
        //if user = number return field = id, id user = string return field = username.
        if(user) {
                var field = Number.isInteger(user) ? 'id' : 'username';
         }

         let sql = 'SELECT * FROM users WHERE ${field} = ?';

         pool.query (sql, user, function(err, result){
                if(result.length)
                    callback(result[0]);
         });
    },



    //Creates user and inserts data into database
    create : function(body, callback)   
    {  
        let pwd = body.password;
        body.password = bcrypt.hashSync(pwd,10);

        var bind = [body.username, body.fullname, body.password];
   
        let sql = 'INSERT INTO users (username, fullname, password) VALUES (?, ?, ?)';
        
        pool.query(sql, bind, function(err, lastId){

            if(err) throw err;
            callback(lastId);
            });
   },

    login : function (username, password, callback)
    {

     this.find (username, function(user) {
            if(user) {
                if(bcrypt.compareSync(password, user.password)) {
                    callback(user);
                    return;
                }
            }
            callback(null);
        });

    }

}
module.exports = User;