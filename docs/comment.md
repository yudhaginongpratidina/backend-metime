## MEMBUAT COMMENT DI FORUM
```
POST http://localhost:4000/api/forum/comments
Content-Type: application/json

{
    "forumDiskusiId" : 1,
    "comment" : "Komentar pertama"
}
```
```
{
  "msg": "Forum comment created successfully",
  "data": {
    "id": 1,
    "forumDiskusiId": 1,
    "comment": "Komentar pertama",
    "createdAt": "2023-12-06T15:00:37.341Z"
  }
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
      "forumDiskusiId": 1,
      "comment": "Komentar pertama",
      "createdAt": "2023-12-06T15:00:37.341Z"
    },
    {
      "id": 2,
      "forumDiskusiId": 1,
      "comment": "Komentar kedua",
      "createdAt": "2023-12-06T15:09:23.777Z"
    }
  ]
}
```

## HAPUS KOMENTAR DI FORUM BERDASARKAN ID KOMENTAR
```
DELETE http://localhost:4000/api/forum/comments/2
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 2,
    "forumDiskusiId": 1,
    "comment": "Komentar kedua",
    "createdAt": "2023-12-06T15:09:23.777Z"
  }
}
```