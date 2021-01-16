#!/usr/bin/env node
const exec = require('child_process').exec

exec('npm init -y && npm i express', (err, stdout, stderr) => {
    if(!err){
        console.log(stdout)
        console.log(stderr)
    } else {
        console.error(err)
    }
})