#!/bin/bash

#$1 = xColName $2=tsvFileName

xData=$(python tsv-col-extractor.py $1 $2)
xMean=$(echo $xData | python csv-col-mean.py)
echo $xData | python csv-col-standard-deviation.py $xMean