#!/usr/bin/python3

from datetime import date
import os

today = date.today()
out = today.strftime("%B %d, %Y")

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head> <title>Hello Python CGI World</title> </head>")
print("<body>")
print("<h1 align=center>Hello HTML World</h1>")
print("<hr>")
print("Hello World<br><br>")
print("This page was generated with the Python programming language<br><br>")
print("The program was run at: " + out + "<br><br>")
print("Your current IP Address is: " + os.environ["REMOTE_ADDR"])
print("</body>")
print("</html>")
