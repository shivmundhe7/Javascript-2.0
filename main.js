const fs = require("fs")

console.log(fs)

console.log("starting")
fs.writeFileSync("shiv.txt", "Shiv is a good Boy")
console.log("Ending")