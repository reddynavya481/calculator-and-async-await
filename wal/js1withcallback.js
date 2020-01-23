const fs=require('fs');
const pathname=require('path')
function print(path,s)
{
    const dir=fs.opendir(path,(err,data)=>{})
    let i=0;
    for await(const dirent of dir)
    {
        if(i<9)
        {
            console.log(indent(s)+dirent.name)
        }
        else{
            console.log(indent(s)+"..more than 10")
            return
        }
        i+=1
        try{
            if(dirent.isDirectory())
            {
                await print(""+Directory(p,dirent.name),s*4).catch(console.error)
            }
        }
        catch(e)
        {
            console.error(e.name)
        }
    }
}
print("C:/Users/DELL/hello-world/wal",1)
function indent(i,msg)
{
    let sp='';
    for(let ind=0;ind<i;ind++)
    {
        sp=sp+' ';
    }
    return sp;
}
function Directory(current,next)
{
    current=current+'/'+next
    return current
}