//In node the main module is called server.js or app.js
console.log("Hello Node");
//Node is modules and we can import built in modules to use
//syntex is const = nameofmodule = require("nameofmodule");
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
function CheckError(error){
    if(error){
        console.log("error");
    }else{
        console.log("Sucess");
    }
}

fs.writeFile ("test.txt","Testing FS. WriteFile", CheckError);
