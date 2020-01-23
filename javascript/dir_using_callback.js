const fs=require('fs')
async function print(path,s)
{
    const dir=await fs.promises.opendir(path)
    let i=0
    for await(const d of dir)
    {
        if(i<9)
        {
            console.log(indent(s)+d.name)
        }
        else
        {
            console.log(indent(s)+"files exceeded 10")
        }
        i+=1
        try{
            if(d.isDirectory())
            {
                await print(""+Directory(path,d.name),s*2)
            }
        }
        catch(e)
        {console.error(e.name)}
    } 
}      
       
    print("C:/Users/DELL/hello-world/wal",1)
    function indent(i,msg){
        let space = '';
        for(let ind = 0; ind<i ; ind++){
            space = space + ' ';
        }
        return space;
    }
    function Directory(current,next){
        current = current+'/'+next
        return current
    }      
