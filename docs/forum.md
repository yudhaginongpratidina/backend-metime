## MENDAPATKAN DATA SEMUA FORUM
```
GET http://localhost:4000/api/forum
```

## MENDAPATKAN DATA FORUM BERDASARKAN ID
```
GET http://localhost:4000/api/forum/1
```
```
{
  "msg": "Success",
  "data": {
    "id": 1,
    "userId": 6,
    "title": "Diskusi Terbuka",
    "text": "Ini diskusi terbuka",
    "createdAt": "2023-12-06T14:42:36.725Z"
  }
}
```

## MEMBUAT THREAD BARU
```
POST http://localhost:4000/api/forum
Content-Type: application/json

{
    "userId" : 6,
    "title" : "Diskusi Terbuka",
    "text" : "Ini diskusi terbuka"
}
```
```
{
  "msg": "Forum created successfully",
  "data": {
    "id": 1,
    "userId": 6,
    "title": "Diskusi Terbuka",
    "text": "Ini diskusi terbuka",
    "createdAt": "2023-12-06T14:42:36.725Z"
  }
}
```

## MENGHAPUS DATA THREAD BERDASARKAN ID
```
DELETE http://localhost:4000/api/forum/2
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 2,
    "userId": 7,
    "title": "Diskusi Terbuka 1",
    "text": "Ini diskusi terbuka",
    "createdAt": "2023-12-06T14:46:49.635Z"
  }
}
```