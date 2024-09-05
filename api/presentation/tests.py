from django.test import TestCase

from presentation.services import sort_by_created_at, clean_thumbnails


class PreziTestCase(TestCase):
    def test_data_sorted_correctly(self):
        data = [
            {
                "id": "1",
                "title": "First",
                "createdAt": "November 21, 2014"
            },
            {
                "id": "2",
                "title": "Second",
                "createdAt": "August 13, 2014"
            },
        ]

        sort_by_created_at(data)

        self.assertEqual(data, [
            {
                "id": "2",
                "title": "Second",
                "createdAt": "August 13, 2014"
            },
            {
                "id": "1",
                "title": "First",
                "createdAt": "November 21, 2014"
            },
        ])

    def test_clean_thumbnails(self):
        data = [
            {
                "id": "1",
                "title": "first",
                "thumbnail": "img",
                "creator": {
                    "name": "creator name",
                    "profileUrl": "other img"
                },
                "createdAt": "May 13, 2014"
            }
        ]

        data = clean_thumbnails(data)

        self.assertEqual(data, [
            {
                "id": "1",
                "title": "first",
                "thumbnail": "https://picsum.photos/400/200",
                "creator": {
                    "name": "creator name",
                    "profileUrl": "https://github.com/mdo.png"
                },
                "createdAt": "May 13, 2014"
            }
        ])
