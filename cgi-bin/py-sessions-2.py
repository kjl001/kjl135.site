#!/usr/bin/python3

import os
import cgi

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")
print("<h1 align=center>Python Sessions Page 2</h1>")
print("<hr>")

form = cgi.FieldStorage()
name = form.getvalue('name')
if name:
	print("<p><b>Name: </b>" + name + "</p><br>")
	print("<form action='/cgi-bin/py-sessions-1.py'>")
	print("<input type='hidden' name='name' value=" + name + ">")
	print("<button type='submit'>Session Page 1</button>")
	print("</form>")
else:
	print("<p><b>Name: </b>You do not have a name set</p><br>")
	print("<form action='/cgi-bin/py-sessions-1.py'>")
	print("<button type='submit'>Session Page 1</button>")
	print("</form>")

print("<a href='/py-cgiform.html'>CGI Form</a>")

print("<br><br>")

print("<a href='/cgi-bin/py-destroy-session.py'>Destroy Session</a>")
print("</body>")
print("</html>")