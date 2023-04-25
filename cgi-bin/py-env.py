#!/usr/bin/python3

import os

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>Environment Variables</title></head>")
print("<body>")
print("<h1 align=center>Environment Variables</h1>")
print("<hr>")

print("<h2>Environment Variables</h2>")
print("<ul>")
for k,v in os.environ.items():
	print("<li><b>" + k + "</b> = " + v + "</li>")
print("</ul>")
	
print("</body>")
print("</html>")