#!/usr/bin/python3

import os
import requests

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>General Request Echo</title></head>")
print("<body>")
print("<h1 align=center>General Request Echo</h1>")
print("<hr>")

print("<p><b>Request Method: </b>" + os.environ["REQUEST_METHOD"] + "</p>")
print("<p><b>Protocol: </b>" + os.environ["SERVER_PROTOCOL"] + "</p>")
print("<p><b>Query String: </b>" + os.environ["QUERY_STRING"] + "</p>")
print("<p><b>Message Body: </b></p>")
url = "https://kjl135.site/cgi-bin/py-general-request-echo.py"
response = requests.get(url)

print("<ul>")
print("<li>" + response.text + "</li>")
print("</ul>")

print("</body>")
print("</html>")