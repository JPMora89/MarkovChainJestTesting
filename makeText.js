/** Command-line tool to generate Markov text. */

const fs = require("fs")
const markov = require("./markov")
const axios = require("axios")

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function callback(error,data){
        if(error) {
            console.error("OOPS ERROR IN HERE")
            process.kill(1)
        } else {
            generateText(data)
        }
    });
}

async function makeURLText(url) {
    let res;
    try {
        res=await axios.get(url);
    } catch(error) {
        console.error("URL error somewhere")
        process.kill(1)
    } generateText(res.data)
}

let [method, path] = process.argv.slice(2);
if (method === "file") {
    makeText(path);
}
else if (method==='url') {
    makeURLText(path);
} else {
    console.error("something wrong with the method buddy")
    process.exit(1)
}