### MENDAPATKAN DATA MESSAGE
```
GET http://localhost:4000/api/messages
```
```
{
  "msg": "Success",
  "data": [
    {
      "id": 1,
      "userId": 6,
      "message": "pesan sudah terkirim satu",
      "createdAt": "2023-12-06T15:22:42.074Z"
    }
  ]
}
```


### MEMBUAT MESSAGE
```
POST http://localhost:4000/api/messages
Content-Type: application/json

{    
    "userId"        : 6,
    "message"       : "pesan sudah terkirim satu"
}
```
```
{
  "msg": "Message created successfully",
  "data": {
    "id": 1,
    "userId": 6,
    "message": "pesan sudah terkirim satu",
    "createdAt": "2023-12-06T15:22:42.074Z"
  }
}
```


### HAPUS MESSAGE BERDASARKAN ID
```
DELETE http://localhost:4000/api/messages/1
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 1,
    "userId": 6,
    "message": "pesan sudah terkirim satu",
    "createdAt": "2023-12-06T15:22:42.074Z"
  }
}
```