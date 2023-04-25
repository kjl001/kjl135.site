#!/usr/bin/python3

import os
import json
from datetime import date

today = date.today()
curr_date = today.strftime("%B %d, %Y")

out = {
	"message": "Hello World from Python!",
	"date": "Today's date is " + curr_date,
	"ipAddress": os.environ["REMOTE_ADDR"]
}

print("Cache-Control: no-cache")
print("Content-Type: text/html;charset=utf-8")
print ("Content-type:text/html\r\n")
print("<!DOCTYPE html>")
print("<html>")
print("<head><title>Hello Python CGI World</title></head>")
print("<body>")
print(json.dumps(out))
print("</body>")
print("</html>")