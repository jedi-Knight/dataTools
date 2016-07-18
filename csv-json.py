#!/usr/bin/env python3

import sys
import csv
import json
from collections import OrderedDict

jsonData = []
with open(sys.argv[1], 'r', encoding='utf-8') as csvDataFile:
    csvData = csv.reader(csvDataFile)
    fieldNames = next(csvData)
    for row in csvData:
        jsonFieldSet = OrderedDict()
        for index,fieldName in enumerate(fieldNames):
            jsonFieldSet[fieldName] = row[index]
        jsonData += [jsonFieldSet]

    print(json.dumps(jsonData))
    csvDataFile.close()

#print(fieldNames)
