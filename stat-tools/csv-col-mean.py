#!/usr/bin/env python

#Bash syntax: $ python csv-col-mean.py lineOfNumbersSeperatedByCommas.fcsv
#Output string: xColName data column from srcCsv.csv

import sys

xData = None
with open(sys.argv[1], 'r') if len(sys.argv) > 1 else sys.stdin as srcTSVFile:
    xData = [float(x) for x in srcTSVFile.read().rstrip().split(',')]
    srcTSVFile.close()
print sum(xData)/len(xData)