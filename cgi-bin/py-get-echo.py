#!/usr/bin/python3

import os

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>GET Request Echo</title></head>")

print("<body>")
print("<h1 align=center>GET Request Echo</h1>")
print("<hr>")

print("<p><b>Query String: </b>" + os.environ["QUERY_STRING"] + "</p>")
print("</body>")
print("</html>")