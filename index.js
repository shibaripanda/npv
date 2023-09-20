import npv from "./modules/npv.js"

async function start(){
    console.log('NPV: ' + await(npv(-10, 4, 0.1, 4)))
}

start()
