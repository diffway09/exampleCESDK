#!/bin/bash
INFILE=./platforms/android/app/build/outputs/logs/manifest-merger-debug-report.txt
startString="]"
endSting="/AndroidManifest"
allPath=()
while read -r LINE
do
    if [[ $LINE == *"[ly.img"* ]]; then
        subEnd="${LINE%%$endSting*}"
        subStart="${subEnd%%$startString*}"
        path=${subEnd:$((${#subStart} + 2))}
        allPath+=(${path}"/jars")
    fi
done < "$INFILE"

uniquePath=($(echo "${allPath[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))
count=0
cd typings/android
for path in "${uniquePath[@]}"
do
    printf '%s\n' "$path"
    ns typings android --jar "${path}"
    (( count++ ))
    mv android.d.ts android${count}.d.ts
done

