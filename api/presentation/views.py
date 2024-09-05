from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView

from presentation.services import load_data, sort_by_created_at, clean_thumbnails


class PresentationAPIView(APIView):
    take = 15

    def get(self, request):
        page = int(request.query_params.get("page", 1))
        search = request.query_params.get("search", "")

        try:
            data = load_data('./static/prezis.json')
        except:
            raise APIException('Missing json file')

        sort_by_created_at(data)
        data = clean_thumbnails(data)

        if search != "":
            data = [d for d in data if search in d["title"]]

        return Response({
            "data": data[(page - 1) * self.take:page * self.take],
            "total": len(data),
            "page": page,
            "last_page": len(data) // self.take + 1
        })
