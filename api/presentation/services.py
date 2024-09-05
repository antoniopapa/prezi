import json
from datetime import datetime


def load_data(path):
    return json.load(open(path))


def sort_by_created_at(data):
    data.sort(key=lambda x: datetime.strptime(x["createdAt"], "%B %d, %Y"))


def clean_thumbnails(data):
    return [dict(d, **{
        "thumbnail": "https://picsum.photos/400/200",
        "creator": {
            "name": d["creator"]["name"],
            "profileUrl": "https://github.com/mdo.png"
        }
    }) for d in data]
