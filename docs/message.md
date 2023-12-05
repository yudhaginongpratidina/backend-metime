### MENDAPATKAN DATA MESSAGE
```
GET http://localhost:4000/api/messages
```
```
{
  "msg": "Success",
  "data": [
    {
      "id"          : 1,
      "firstName"   : "user",
      "lastName"    : "satu",
      "email"       : "user1@gmail.com",
      "phone"       : "091213++",
      "message"     : "pesan sudah terkirim",
      "createdAt"   : "2023-12-05T04:04:20.033Z"
    }
  ]
}
```


### MEMBUAT MESSAGE
```
POST http://localhost:4000/api/messages
Content-Type: application/json

{
    
    "firstName"     : " your first name ",
    "lastName"      : " your last name ",
    "email"         : " your email",
    "phone"         : " your phone number ",
    "message"       : " your message "
}
```
```
{
  "msg": "Message created successfully",
  "data": {
    "id": 3,
    "firstName": "user",
    "lastName": "dua",
    "email": "user1@gmail.com",
    "phone": "091213++",
    "message": "pesan sudah terkirim satu",
    "createdAt": "2023-12-05T04:11:42.040Z"
  }
}
```


### HAPUS MESSAGE BERDASARKAN ID
```
DELETE http://localhost:4000/api/messages/3
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 3,
    "firstName": "user",
    "lastName": "dua",
    "email": "user1@gmail.com",
    "phone": "091213++",
    "message": "pesan sudah terkirim satu",
    "createdAt": "2023-12-05T04:11:42.040Z"
  }
}
```