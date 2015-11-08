import json
from urllib2 import urlopen
with open('30.json','r') as data_file:
     data = json.load(data_file)
update = open("data.json", "a")

for i in xrange(len(data)):
    if (data[i]["title"] != ""):
        title = data[i]["title"]
        description=data[i]["description"]
        bill_votes=data[i]["bill_votes"]
        created=data[i]["created_at"]
        sources=data[i]["sources"]

        dicts={"title":title,"description":description,"bill_votes":bill_votes,"created_at":created,"sources":sources}
        update.write(json.dumps(dicts, sort_keys=True, indent=4, separators=(',', ': ')))
update.close()

DONE WIHT 30
