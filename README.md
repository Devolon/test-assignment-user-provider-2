# User Provider

## Running the user provider instance
```shell
docker run --rm -p 3000:3000 dev0l0n/test-assignment-user-provider-2:latest
```

## Endpoints

### Getting list of users
```http request
GET http://localhost:3000/users?pageNumber=1&pageSize=10
Accept: application/json
```

### Getting a specific user details by email
```http request
GET http://localhost:3000/users/mhanlin0@aol.com
Accept: application/json
```
