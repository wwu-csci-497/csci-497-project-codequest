#!/usr/bin/env python3
import fileinput
import sys
import glob, os
from zipfile import ZipFile
os.chdir(os.getcwd())

version = ''
if len(sys.argv) > 1:
    version = sys.argv[1]
else:
    version_file = open('version.txt', 'r')
    last_version = format(float(version_file.read()), '.6f')
    version = format(float(last_version) + 0.000001, '.6f')
    print('v' + str(version))
    with open('./version.txt', 'w') as f:
      f.write(str(version))

for file in glob.glob('./*.html'):
    with open(file, 'r') as f :
      filedata = f.read()
    filedata = filedata.replace('ver=' + last_version, 'ver=' + str(version))
    filedata = filedata.replace('.js"', '.js?ver=' + str(version) + '"')
    filedata = filedata.replace('.css"', '.css?ver=' + str(version) + '"')
    with open(file, 'w') as f:
      f.write(filedata)
