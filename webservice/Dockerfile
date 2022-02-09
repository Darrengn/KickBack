FROM openjdk:11.0.14-oraclelinux8

VOLUME /tmp

ARG JAR_FILE

COPY build/libs/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]