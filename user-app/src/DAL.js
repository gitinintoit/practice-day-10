const mariadb=require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'userdb',
    connectionLimit: 5
});

function getUsers(callback){
    pool.getConnection()
        .then(connection=>{
            connection.query("SELECT * from usersdata").then(callback)
        })
}
function saveUser(user){
    pool.getConnection()
    .then(conn =>{
        const id=4;
        console.log('connected..');
        return conn.query("INSERT INTO usersdata value (?,?,?,?,?)",[id,user.firstname,user.age,user.skill,user.joiningDate])
        .then((res) => {
            console.log(res);
            conn.end();
        })
        .catch(err => {
            console.log(err);
            conn.end();
        })
    }).catch(err=>{
        console.log(err);
        console.error('connection problem');
    });
}

module.exports={
    saveUser: saveUser,
    getUsers:getUsers
}