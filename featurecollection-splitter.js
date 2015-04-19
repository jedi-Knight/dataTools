var fs = require("fs");
var mkdirp = require("mkdirp");

var dirName = "output";

if(!(process.argv[2])){
    console.log("enter source filename");
    return;
}

if(process.argv[3]){
    dirName = process.argv[3];
}

function GeoJSONSkeleton(geojson){
    return {
        type: geojson.type,
        crs: geojson.crs,
        features: []
    };
}

mkdirp(dirName, function(err){
    if(err){
        console.log("error in source file: " + process.argv[2]);
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
    
    data.features.forEach(function(feature, index){
        var geojsonSkeleton = new GeoJSONSkeleton(data);
        geojsonSkeleton.features.push(feature);
        
        fs.writeFile(dirName+"/"+(process.argv[4]?feature.properties[process.argv[4]]+".geojson":(feature.properties.name?feature.properties.name+".geojson":index+".geojson")), JSON.stringify(geojsonSkeleton), function(err){
            if(err) throw err;
            if(index === data.features.length-1) console.log("done! features saved in directory: "+ process.argv[3]);
        });
    });
    
    
    });
    
});