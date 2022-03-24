spin up

```sh
cd webservice
./gradlew clean build
docker-compose build && docker-compose up
```

or

```sh
cd webservice
sh start.sh
```

if trouble connecting in container:

```sh
# removes container and all anonymous attached volumes
docker-compose rm -v
```

Bootup will "stall" after building. That just means that the sql container is booting up.
