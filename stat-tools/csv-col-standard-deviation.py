#!/usr/bin/env python

#Bash syntax: $ python csv-col-mean.py arithmeticMean lineOfNumbersSeperatedByCommas.fcsv
#Output string: Standard Deviation of lineOfNumbersSeperatedByCommas.fcsv

import sys

xData = None
m = float(sys.argv[1])
with open(sys.argv[2], 'r') if len(sys.argv) > 2 else sys.stdin as srcTSVFile:
    xData = [float(x) for x in srcTSVFile.read().rstrip().split(',')]
    srcTSVFile.close()

print (sum([(x-m)**2 for x in xData])/len(xData)) ** 0.5