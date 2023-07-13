const connection = require("../database")

function getUser(request, response)
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM usuarios";
    else
        sql = "SELECT * FROM usuarios WHERE id=" + request.query.id;

    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

function getUser2(request, response)
{
    let sql = "SELECT * FROM usuarios WHERE id=" + request.params.id;
    console.log(sql);  
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result)
            response.send(result);
        }
    })
}

function postUser(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO usuarios (nombre, apellido1, apellido2) " + 
            "VALUES ('" + request.body.nombre + "', '" + 
                            request.body.apellido1 + "', '" +
                            request.body.apellido2 + "')";
    console.log(sql);                      
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }
    })
}

function putUser(request, response)
{
    console.log(request.body);
    let params = [request.body.nombre, 
                  request.body.apellido1, 
                  request.body.apellido2,
                  request.body.id]

    let sql = "UPDATE usuarios SET nombre = COALESCE(?, nombre) , " + 
               "apellido1 = COALESCE(?, apellido1) , " + 
               "apellido2 = COALESCE(?, apellido2)  WHERE id = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

function deleteUser(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM usuarios WHERE id = '" + request.body.id + "'";
    console.log(sql); 
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


module.exports = {getUser, getUser2, postUser, putUser, deleteUser};

