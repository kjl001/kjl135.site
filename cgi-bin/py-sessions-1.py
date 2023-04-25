#!/usr/bin/python3

import os

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")
print("<h1 align=center>Python Sessions Page 1</h1>")
print("<hr>")

url = "https://kjl135.site/cgi-bin/py-sessions-1.py"
x = requests.get(url)

print(x.text)
print("</body>")
print("</html>")