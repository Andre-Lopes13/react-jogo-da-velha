FROM ubuntu:latest AS build 

# Install dependencies
RUN apt-get update
RUN a´t-get install openjdk-17-jdk -y

COPY . .

RUN apt-get install maven -y
RUN mvn clean install

EXPOSE 8080

COPY --from=build /target/todolist-1.0.0.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]