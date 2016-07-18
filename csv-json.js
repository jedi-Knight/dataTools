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
    
    var csvLinesArray = data.trim().replace(/\"/g,"").split("\n");
    var csvKeysArray = csvLinesArray.shift().split(",");
    if(process.argv[4] && process.argvp[4]==="-v")console.log("number of entries in csv: "+csvLinesArray.length);
    var jsonArray = [];
    csvLinesArray.forEach(function(csvLine, index){
        var csvs = csvLine.split(",");
        var csvJSON = {};
        csvs.forEach(function(csv, _index){
            csvJSON[csvKeysArray[_index]] = csv;
        });
        jsonArray.push(csvJSON);
    });
    fs.writeFile(process.argv[3], JSON.stringify(jsonArray), function(err){
        if(err) throw err;
        console.log("done! json array saved in file: "+ process.argv[3]);
    });
});
