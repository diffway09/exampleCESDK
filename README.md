# Integrate CESDK to Nativescript (POC)

## 1. run command 'ns build android'

   img.ly dependencies were not available in exploded-dependencies folder, but they had been listed to text file.
   ./platforms/android/app/build/outputs/logs/manifest-merger-debug-report.txt
    So, I created script 'gen-imgly.sh' to read path from text file and generate d.ts script

## 2. run script gen-imgly.sh
   After script running, there are some files that error.

    Android d.ts Generator Version : 3.0.0
      Error executing Typescript Definitions Generator: null
      java.lang.NullPointerException
      at com.telerik.dts.DtsApi.generateDtsContent(DtsApi.java:218)
      at com.telerik.dts.Generator.generateDts(Generator.java:69)
      at com.telerik.dts.Generator.start(Generator.java:51)
      at com.telerik.Main.main(Main.java:42)
      Command java failed with exit code 1

