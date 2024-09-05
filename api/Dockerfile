FROM python:3.10.14-alpine

WORKDIR /app/api/
ADD ./api/requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ADD ./api .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]