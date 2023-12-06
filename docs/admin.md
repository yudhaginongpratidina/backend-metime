## MEMBUAT / MELAKUKAN REGISTER ADMIN BARU
```
POST http://localhost:4000/api/admin
Content-Type: application/json

{
    "email" : "admin@gmail.com",
    "password" : "admin",
    "re_password" : "admin"
}
```
```
{
  "msg": "Admin created successfully",
  "data": {
    "id": 2,
    "email": "admin@gmail.com",
    "password": "$2b$10$PnmwE8VvMNSqSAN0iT0KiegjIoLhDhe//w8g10UwfLo/XBPG1cf6q",
    "createdAt": "2023-12-06T14:10:06.324Z",
    "updatedAt": "2023-12-06T14:10:06.324Z"
  }
}
```

## MENDAPATKAN SEMUA DATA ADMIN
```
GET http://localhost:4000/api/admin
```
```
{
  "msg": "Success",
  "data": [
    {
      "id": 2,
      "email": "admin@gmail.com",
      "password": "$2b$10$PnmwE8VvMNSqSAN0iT0KiegjIoLhDhe//w8g10UwfLo/XBPG1cf6q",
      "createdAt": "2023-12-06T14:10:06.324Z",
      "updatedAt": "2023-12-06T14:10:06.324Z"
    }
  ]
}
```


## MENDAPATKAN DATA ADMIN BERDASARKAN ID
```
GET http://localhost:4000/api/admin/2
```
```
{
  "msg": "success",
  "data": {
    "id": 2,
    "email": "admin@gmail.com",
    "password": "$2b$10$PnmwE8VvMNSqSAN0iT0KiegjIoLhDhe//w8g10UwfLo/XBPG1cf6q",
    "createdAt": "2023-12-06T14:10:06.324Z",
    "updatedAt": "2023-12-06T14:10:06.324Z"
  }
}
```

### MELAKUKAN UPDATE DATA ADMIN BERDASARKAN ID
```
PATCH http://localhost:4000/api/admin/1
Content-Type: application/json

{
    "email" : "admin1@gmail.com",
    "password" : "kesehatan",
    "re_password" : "kesehatan"
}
```
```
{
  "msg": "Admin updated successfully",
  "data": {
    "id": 2,
    "email": "admin1@gmail.com",
    "password": "$2b$10$1OwgGVtrgJ8mVLI2hlSqpuG5YajayF8QiWSNrW7j0zus7Kgk7hEm2",
    "createdAt": "2023-12-06T14:10:06.324Z",
    "updatedAt": "2023-12-06T14:10:06.324Z"
  }
}
```


### MELAKUKAN LOGIN
```
POST http://localhost:4000/api/admin/login
Content-Type: application/json

{
    "email" : "admin1@gmail.com",
    "password" : "kesehatan",
    "re_password" : "kesehatan"
}
```
```
{
  "msg": "success",
  "data": {
    "id": 2,
    "email": "admin1@gmail.com",
    "password": "$2b$10$1OwgGVtrgJ8mVLI2hlSqpuG5YajayF8QiWSNrW7j0zus7Kgk7hEm2",
    "createdAt": "2023-12-06T14:10:06.324Z",
    "updatedAt": "2023-12-06T14:10:06.324Z"
  }
}
```

### DELETE DATA ADMIN BERDASARKAN ID
```
DELETE http://localhost:4000/api/admin/1
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 2,
    "email": "admin1@gmail.com",
    "password": "$2b$10$1OwgGVtrgJ8mVLI2hlSqpuG5YajayF8QiWSNrW7j0zus7Kgk7hEm2",
    "createdAt": "2023-12-06T14:10:06.324Z",
    "updatedAt": "2023-12-06T14:10:06.324Z"
  }
}
```