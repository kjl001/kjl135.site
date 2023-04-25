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
print(name)
print("<form action='/cgi-bin/py-sessions-1.py'>")
print("<input type='hidden' name='name' value=" + name + ">")
print("<button type='submit'>Session Page 1</button>")
print("</form>")
print("</body>")
print("</html>")