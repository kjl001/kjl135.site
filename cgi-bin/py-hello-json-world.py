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

print("<html>")
print("<head><title>Hello Python CGI World</title></head>")
print("<body>")
print(out)
print("</body>")
print("</html>")