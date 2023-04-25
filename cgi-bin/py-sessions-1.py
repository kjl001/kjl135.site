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
print("<h1 align=center>Python Sessions Page 1</h1>")
print("<hr>")

form = cgi.FieldStorage()
name = form.getvalue('name')
print(name)
print("<form action='/cgi-bin/py-sessions-2.py>'")
print("<input type='hidden' name='name' value=" + name + ">")
print("<input type='submit' value=" + "<a href='/cgi-bin/py-sessions-2.py'</a>" + ">")
print("</form>")

print("</body>")
print("</html>")