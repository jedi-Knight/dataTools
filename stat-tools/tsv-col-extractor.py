#!/usr/bin/env python

#Bash syntax: $ python csv-col-mean.py srcTsv.tsv xColName
#Output string: xColName data column from srcTsv.tsv

import sys

srcCsv = None
xData = []
with open(sys.argv[2], 'r') if len(sys.argv) > 2 else sys.stdin as srcTSVFile:
    xCol = None
    for line in srcTSVFile:
        if bool(xCol):
            xData.append(line.split('\t')[xCol])
        else:
            xCol = line.rstrip().split('\t').index(sys.argv[1])
    srcTSVFile.close()
print ','.join(xData)