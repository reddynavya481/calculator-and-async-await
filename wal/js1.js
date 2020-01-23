// var fs=require('fs')
// var path=require('path')
// var c=0
// const arrayOfFiles=fs.readdirSync(inp)
// const getAllFiles=function(inp,arrayOfFiles)
// {

// }
// console.log(arrayOfFiles)
// //async function checkdoc(inp)
// {
//     var st=fs.statSync(inp)
//     if(st.isFile())
//     {
//         if(c<=10)
//         {
//             console.log(inp)
//             c+=1
//         }
//         else
//         console.log("count exceeded 10")
//     }
//     else if(st.isDirectory())
//     {
//         if(c<=10)
//         {
//             const dirpath=path.join(__dirname,inp)
//             fs.readdir(dirpath,function(err,files){
//                 files.forEach(function(file){
//                     console.log(file)
//                 })
//              })  
//         }
//         else
//         console.log("count exceeded 10")
//     }
// }
// const fs = require("fs")
// const path = require("path")
// inp="./dir1"
// const getAllFiles = function(dirPath, arrayOfFiles) {
//   files = fs.readdirSync(dirPath)
 
//   arrayOfFiles = arrayOfFiles || []
 
//   files.forEach(function(file) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
//     } 
//     else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
//     }
//   })
 
//   return arrayOfFiles
// }
// console.log(getAllFiles(inp))
const fs = require('fs');
//function to print the directories using path specified
async function print(path,s) {
    //async opening a directory
    const dir = await fs.promises.opendir(path)
    //to count the number of files and folders
    let i = 0;
    //dirent are objects for directory object
    for await (const dirent of dir) {
        if(i<9){
            console.log(indent(s)+dirent.name)
        }
        else{
            console.log(indent(s)+"...other")
            return
        }
        i+=1
        try {
            //if dirent object is a folder then aynchronously
            //enter it and print the contents.
            if (dirent.isDirectory()) {
                await print("" + DirectoryIncrement(path,dirent.name),s*4).catch(console.error)
            }
        }
        catch(e)
        {
            console.error(e.name)
        }
    }
}
//calling the print directory from the root path provided.
print("C:/Users/DELL/hello-world/wal",1).catch(console.error)
// function to give indentation
function indent(i,msg){
    let space = '';
    for(let ind = 0; ind<i ; ind++){
        space = space + ' ';
    }
    return space;
}
//function to increment the directory address.
function DirectoryIncrement(current,next){
    current = current+'/'+next
    return current
}
