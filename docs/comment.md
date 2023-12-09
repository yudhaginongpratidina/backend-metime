## MEMBUAT COMMENT DI FORUM
```
POST http://localhost:4000/api/forum/comments
Content-Type: application/json

{
    "userId" : 5,
    "forumDiskusiId" : 1,
    "comment" : "Komentar pertama"
}
```
```
{
  "msg": "Success",
  "data": [
    {
      "id": 1,
      "userId": 5,
      "forumDiskusiId": 1,
      "comment": "Komentar satu",
      "createdAt": "2023-12-09T21:28:44.104Z"
    }
  ]
}
```

## MENDAPATKAN SELURUH KOMEN BERDASARKAN ID FORUM
```
GET http://localhost:4000/api/forum/comments/1
```
```
{
  "msg": "Success",
  "data": [
    {
      "id": 1,
      "userId": 5,
      "forumDiskusiId": 1,
      "comment": "Komentar satu",
      "createdAt": "2023-12-09T21:28:44.104Z"
    }
  ]
}
```

## HAPUS KOMENTAR DI FORUM BERDASARKAN ID KOMENTAR
```
DELETE http://localhost:4000/api/forum/comments/1
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 1,
    "userId": 5,
    "forumDiskusiId": 1,
    "comment": "Komentar satu",
    "createdAt": "2023-12-09T21:28:44.104Z"
  }
}
```