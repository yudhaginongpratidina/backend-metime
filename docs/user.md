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
untuk data yang di update tinggal menyesuaikan saja
semisal kita ingin update tescemas, tinggal kita update saja test cemasnya,
kalau kita mau update testdepresi, tinggal kita ganti saja tescemasnya menjadi
tesdepresi, dsb (tinggal sesuikan key nya saja) dan idnya

```
PATCH http://localhost:4000/api/users/14
Content-Type: application/json

{
    "tescemas" : 10
}
```

```
{
  "msg": "Update Name successfully",
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