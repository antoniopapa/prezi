FROM python:3.10.14-alpine

WORKDIR /app
ADD ./api/requirements.txt /app/api/

RUN pip install --upgrade pip
RUN pip install -r api/requirements.txt

#ADD ./docker /app/docker
ADD ./api /app/api