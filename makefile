build:
	docker build -t puppiesaver .

run:
	docker run -p 3001:3000 --rm puppiesaver:latest
