const {connect} = require('./client');//should require file name not function name
const {setupInput} = require('./input');
console.log("Connecting ...");

setupInput(connect());