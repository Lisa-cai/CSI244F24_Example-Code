//In node the main module is called server.js or app.js
console.log("Hello Node");
//Node is modules and we can import built in modules to use
//syntex is const nameofmodule = require("nameofmodule");
//os module --give you information about the operation system, memory and cpu
const os = require("os");
//we can get the platform
//create an object
const sysInfo ={
    platform: os.platform(),
    arch: os.arch(),
    memory: os.freemem(),
};
console.log(sysInfo);
//filesystem library(fs)
const fs = require("fs");
//readfile and writefile
//writefile takes 3 arguments - first is the name of the file to be written
//second is the data you want to write
//3rd is a callback function to handle errors or notify if sucess
function CheckError(error){
    if(error){
        console.log("error");
    }else{
        console.log("Sucess");
    } 
}
//rewrite this using an arrow function instead of checkError:
fs.writeFile ("test.txt","Testing FS. WriteFile", (error)=>{
    if(error){
        console.log("error");
    }else{
        console.log("sucess");
    }
});
//readFile() filename, "utf8", callback funtion that will be passed an error an data if any
//callback function will take two paramiters(error, data); 
fs.readFile("test.txt", "utf8", (error, data)=>{
    if(error){
        console.log("error");
    }else{
        console.log(data);
    }
});

//Path library
//path simplies file folder, extensions, any sort of path related
//syntax using module
const path = require("path");
//get the extension of file 
const ext = path.extname("test.txt");
console.log(ext);
//This asynchronos
//setTimeout(() => console.log("time over"), 3000);
//get file name
const base = path.basename("test.txt");
console.log(base);
//there a few global objects
//__filename
//__dirname
console.log(__filename);
console.log(__dirname);
const fullPath = path.join(__dirname, "newFolder","testing.txt");
console.log(fullPath);



