var fs = require("fs");

if(!(process.argv[2] && process.argv[3])){
    console.log("enter source and output file names");
    return;
}

fs.readFile(process.argv[2], {
                encoding: "utf-8"
            }, function(err, data){
    if(err){
        console.log("error in source file: " + process.argv[2]);
        return;
    }
    
    fs.writeFile(process.argv[3], data, function(err){
        if(err) throw err;
        console.log("done! output written to file: "+ process.argv[3]);
    });
});