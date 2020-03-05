#!/usr/bin/env python3
import fileinput
import sys
import glob, os
from zipfile import ZipFile
os.chdir(os.getcwd())

commit_msg = ''
if len(sys.argv) > 1:
    commit_msg = sys.argv[1]
else:
    commit_msg = ''

version = ''
if len(sys.argv) > 2:
    version = sys.argv[2]
else:
    version_file = open('version.txt', 'r')
    last_version = format(float(version_file.read()), '.6f')
    version = format(float(last_version) + 0.000001, '.6f')
    print('v' + str(version))
    write_version = open('version.txt', 'w')
    write_version.write(str(version))

for file in glob.glob('./*.html'):
    with open(file, 'r') as f :
      filedata = f.read()
    filedata = filedata.replace('ver=' + last_version, 'ver=' + str(version))
    filedata = filedata.replace('.js"', '.js?ver=' + str(version) + '"')
    filedata = filedata.replace('.css"', '.css?ver=' + str(version) + '"')
    with open(file, 'w') as f:
      f.write(filedata)

os.system('git add *')
os.system('git commit -m "v' + str(version) + ': ' + commit_msg + '"')
os.system('git push')
