#!/usr/bin/python3

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>Python Session Destroyed</title></head>")
print("<body>")
print("<h1>Session Destroyed</h1>")
print("<a href='/py-cgiform.html'>Back to the CGI Form</a><br>")
print("<a href='/cgi-bin/py-sessions-1.py'>Back to Page 1</a><br>")
print("<a href='/cgi-bin/py-sessions-2.py'>Back to Page 2</a>")
print("</body>")
print("</html>")