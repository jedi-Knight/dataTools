import json
import sys

fc = json.loads(open(sys.argv[1]).read())
splitterKey = sys.argv[2]

extractedFeatures = {}

for feature in fc['features']:

    if feature['properties'][splitterKey] in extractedFeatures:

        extractedFeatures[feature['properties'][splitterKey]]['features'].append(feature)
    else:
        extractedFeatures[feature['properties'][splitterKey]] = {
                    'type': 'FeatureCollection',
                    'features':[feature]
                }

for filename, iFc in extractedFeatures.items():
    gendatafile = open(filename+'.json','w')
    gendatafile.write(json.dumps(iFc))
    gendatafile.close()




























