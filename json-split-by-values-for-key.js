var fs = require("fs");

if(!(process.argv[2] && process.argv[3])){
    console.log("enter source file name and key to filter by");
    return;
}

fs.readFile(process.argv[2], {
                encoding: "utf-8"
            }, function(err, data){
    if(err){
        console.log("error in source file: " + process.argv[2]);
        return;
    }
    
    data = JSON.parse(data);
    var splitJSONArrays = {};
    
    data.forEach(function(jsonObj, index){
        try{
            splitJSONArrays[jsonObj[process.argv[3]]].push(jsonObj);
        }catch(err){
            splitJSONArrays[jsonObj[process.argv[3]]] = [jsonObj];
        }
    });
    
    console.log("hang on there..all set, now writing the files..");
    
    Object.keys(splitJSONArrays).forEach(function(uniqueValInData, index){
        fs.writeFile(uniqueValInData+".json", JSON.stringify(splitJSONArrays[uniqueValInData]), function(err){
            if(err) throw err;
        });
    });
    console.log("done!");
});