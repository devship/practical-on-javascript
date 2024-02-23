// GLOBALS - NO WINDOW!!!
// __dirname - path to current directory
// __filename - file name
// __require - function to use modules(commonjs)
// __module - info about current module (file)
// __process - info about env where the programme is being executed

// local
const secret = "super secret";
// global
const john = 'john';
const peter = 'peter';
const g = 'grace';

module.exports = {john,peter}
// console.log(module);