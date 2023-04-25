#!/usr/bin/python3
import cgitb

from datetime import date
import socket

cgitb.enable()

today = date.today()
out = today.strftime("%B %d, %Y")

print("Cache-Control: no-cache\n")
print("Content-type: text/html\n\n")
print("<html>")
print("<head> <title>Hello Python CGI World</title> </head>")
print("<body>")
print("<h1 align=center>Hello HTML World</h1>")
print("<hr>")
print("Hello World<br><br>")
print("This page was generated with the Python programming language<br><br>")
print("The program was run at: " + out + "<br><br>")
print("Your current IP Address is: " + socket.gethostbyname(socket.gethostname()))
print("</body>")
print("</html>")
