import path from "path"

let myPath = ":\Users\Shiv\Documents\Node-JS\aboutpath.js\shiv.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))