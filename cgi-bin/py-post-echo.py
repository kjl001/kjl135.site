#!/usr/bin/python3

import os
import requests
import sys

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>POST Request Echo</title></head>")

print("<body>")
print("<h1 align=center>POST Request Echo</h1>")
print("<hr>")

url = "https://kjl135.site/cgi-bin/py-post.echo.py"
response = requests.get(url)

data = sys.stdin.read()

print("<ul>")
print("<li>" + data + "</li>")
print("</ul>")

print("</body>")
print("</html>")