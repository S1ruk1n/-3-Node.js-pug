import express  from 'express'

const express = require ('express')
const app = express()

const pug = require('pug')

app.set('view engine','pug')

app.get('/',function(req,res){
    res.render(
        'sample',
        {title : 'Express Pug', message: ' Express Pug template'}
    )
})