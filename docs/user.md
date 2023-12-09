## UPDATE TEST KESEHATAN USER
```
PATCH http://localhost:4000/api/users/test/9
Content-Type: application/json

{
    "tesstress" : 50,
    "teskepribadian" : 10
}
```
```
{
  "msg": "Update Name successfully",
  "data": {
    "id": 9,
    "firstName": "kyouya",
    "lastName": "kun",
    "email": "kyouya@gmail.com",
    "password": "$2b$10$uH3P.f73NepnwPFaAm3WYOMvt9dOnwZIqt86ZIeHzB2BQzrH3JWsW",
    "image": "https://robohash.org/1702158983529.png",
    "tesdepresi": 0,
    "tesstress": 50,
    "tesbunuhdiri": 0,
    "tescemas": 0,
    "teskepribadian": 10,
    "tesburnout": 0,
    "createdAt": "2023-12-09T21:56:24.720Z",
    "updatedAt": "2023-12-09T21:56:24.720Z"
  }
}
```





## MENDAPATKAN SEMUA DATA USERS
```
GET http://localhost:4000/api/users
```
```
{
  "msg": "success",
  "data": [
    {
      "id": 6,
      "firstName": "user",
      "lastName": "lima",
      "email": "user5@gmail.com",
      "password": "$2b$10$DjxOqu8iQl8u.caYYJHE.O2TneChbTFnrZVCO64wzMuawZAj75YiO",
      "image": "https://robohash.org/1701777350900.png",
      "tesdepresi": 0,
      "tesstress": 0,
      "tesbunuhdiri": 0,
      "tescemas": 0,
      "teskepribadian": 0,
      "tesburnout": 0,
      "createdAt": "2023-12-05T11:55:52.512Z",
      "updatedAt": "2023-12-05T11:55:52.512Z"
    },
  ]
}
```

### MEMBUAT USER BARU / REGISTRASI
```
POST http://localhost:4000/api/users
Content-Type: application/json

{
    "firstName"     : "user",
    "lastName"      : "satu",
    "email"         : "user2@gmail.com",
    "password"      : "kesehatan",
    "re_password"   : "kesehatan"
}
```
```
{
  "id": 14,
  "firstName": "user",
  "lastName": "satu",
  "email": "user2@gmail.com",
  "password": "$2b$10$LopiKw1ddEzD/4KDfBphje9XByrxDZfdUVD2U1W9jgDiWZwgWbVXS",
  "image": "https://robohash.org/1701779340850.png",
  "tesdepresi": 0,
  "tesstress": 0,
  "tesbunuhdiri": 0,
  "tescemas": 0,
  "teskepribadian": 0,
  "tesburnout": 0,
  "createdAt": "2023-12-05T12:29:19.947Z",
  "updatedAt": "2023-12-05T12:29:19.947Z"
}
```



## MELAKUKAN UPDATE DATA USER BERDASARKAN ID
```
PATCH http://localhost:4000/api/users/9
Content-Type: application/json

{
    "firstName"     : "kyouya",
    "lastName"      : "kun",
    "email"         : "kyouya@gmail.com",
    "password"      : "kesehatan",
    "re_password"   : "kesehatan"
}
```

```
{
  "msg": "Update Name successfully",
  "data": {
    "id": 9,
    "firstName": "kyouya",
    "lastName": "kun",
    "email": "kyouya@gmail.com",
    "password": "$2b$10$uH3P.f73NepnwPFaAm3WYOMvt9dOnwZIqt86ZIeHzB2BQzrH3JWsW",
    "image": "https://robohash.org/1702158983529.png",
    "tesdepresi": 0,
    "tesstress": 0,
    "tesbunuhdiri": 0,
    "tescemas": 0,
    "teskepribadian": 0,
    "tesburnout": 0,
    "createdAt": "2023-12-09T21:56:24.720Z",
    "updatedAt": "2023-12-09T21:56:24.720Z"
  }
}
```

## MELAKUKAN DELETE DATA USER BERDASARKAN ID
```
DELETE http://localhost:4000/api/users/14
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 14,
    "firstName": "user",
    "lastName": "satu",
    "email": "user2@gmail.com",
    "password": "$2b$10$LopiKw1ddEzD/4KDfBphje9XByrxDZfdUVD2U1W9jgDiWZwgWbVXS",
    "image": "https://robohash.org/1701779340850.png",
    "tesdepresi": 0,
    "tesstress": 0,
    "tesbunuhdiri": 0,
    "tescemas": 10,
    "teskepribadian": 0,
    "tesburnout": 0,
    "createdAt": "2023-12-05T12:29:19.947Z",
    "updatedAt": "2023-12-05T12:29:19.947Z"
  }
}
```

## LOGIN USER
```
POST http://localhost:4000/api/login
Content-Type: application/json

{
    "email" : "user1@gmail.com",
    "password" : "kesehatan"
}
```