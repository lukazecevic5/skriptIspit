
const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'prodavnica'
});

const bcrypt = require("bcrypt");


const route = express.Router();


const sema = Joi.object().keys({
    marka: Joi.string().trim().required(),
    model: Joi.string().trim().required(),
});

const loginsema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
});

const registersema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    surname: Joi.string().trim().required(),
    mail: Joi.string().trim().required(),
});



const link = Joi.object().keys({
    id: Joi.number().min(1).max(50).required()
});


route.use(express.json());


route.get('/patike', (req, res) => {
    pool.query('select * from patike', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    });
});


route.post('/addpatika', (req, res) => {
    let { error } = Joi.validate(req.body, sema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into patike (marka, model) values (?, ?)";
        let formated = mysql.format(query, [req.body.marka, req.body.model]);

        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from patike where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.post('/register', (req, res) => {
    let { error } = Joi.validate(req.body, registersema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into user (username,password,mail,name,surname,admin) values (?, ?,?,?,?,?)";
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password,salt);
        let formated = mysql.format(query, [req.body.username,hash,req.body.mail, req.body.name,req.body.surname, 0]);
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from user where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.post('/registeradmin', (req, res) => {
    let { error } = Joi.validate(req.body, registersema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into user (username,password,mail,name,surname,admin) values (?, ?,?,?,?,?)";
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password,salt);
        let formated = mysql.format(query, [req.body.username,hash,req.body.mail, req.body.name,req.body.surname, 1]);
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from user where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.post('/login', (req, res) => {
    let { error } = Joi.validate(req.body, loginsema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = 'select * from user where username=?';
        let formated = mysql.format(query, [req.body.username]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else{
                if (rows.length == 0){
                    res.status(400);
                }
                else{
                    const valPassword = bcrypt.compareSync(req.body.password,rows[0].password);
                    if (valPassword){
                        res.send(rows[0]);
                    }else
                    res.status(400);
                }
            }
                

        });
    }
});


route.get('/patika/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);

    if(error){
        res.status(400).send(error.details[0].message);
    }else {
        let query = 'select * from patike where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else
                res.send(rows[0]);

        });
    }
});

route.post('/updatepatika/:id', (req, res) => {

    let { error } = Joi.validate(req.params, link);

    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        let { error } = Joi.validate(req.body, sema);
        if(error){
            res.status(400).send(error.details[0].message);
        }
        else {
            let query = "update patike set marka=?, model=? where id=?";
            let formated = mysql.format(query, [req.body.marka, req.body.model, req.params.id]);

            pool.query(formated, (err, response) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else {
                    query = 'select * from patike where id=?';
                    formated = mysql.format(query, [req.params.id]);

                    pool.query(formated, (err, rows) => {
                        if (err)
                            res.status(500).send(err.sqlMessage);
                        else
                            res.send(rows[0]);
                    });
                }
            });
        }
    }

});


route.get('/delpatika/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);
    if(error)
        res.status(400).send(error.details[0].message);
    else
    {
        let query = 'select * from patike where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                let poruka = rows[0];

                let query = 'delete from patike where id=?';
                let formated = mysql.format(query, [req.params.id]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(poruka);
                });
            }
        });
    }
});

module.exports = route;