#!/bin/bash

# Define the input file
INFILE=./platforms/android/app/build/outputs/logs/manifest-merger-debug-report.txt

# Read the input file line by line
while read -r LINE
do
    if [[ $LINE == *"[ly.img"* ]]; then
        printf '%s\n' "$LINE"
    fi
done < "$INFILE"
