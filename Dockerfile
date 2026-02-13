FROM node:25.0.0

WORKDIR /app

RUN npm install

COPY static ./static

RUN npx @tailwindcss/cli -i ./static/css/style.css -o ./static/css/output.css --minify

FROM python:3.13-slim-trixie

RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg

COPY . ./app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000


CMD ["python3", "-m","gunicorn","--workers", "4", "--bind", "0.0.0.0:5000", "main:app"]

