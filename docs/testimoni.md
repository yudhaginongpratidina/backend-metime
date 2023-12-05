## MENDAPATKAN SEMUA DATA TESTIMONI
```
GET http://localhost:4000/api/testimoni
```
```
{
  "msg": "success",
  "data": [
    {
      "id": 2,
      "userId": 13,
      "name": "user 1",
      "rating": 4,
      "message": "Platform web ini sangat membantu kami untuk melakukan pengecekan kondisi mental",
      "createdAt": "2023-12-05T13:15:58.188Z"
    }
  ]
}
```

### MEMBUAT TESTIMONI
```
POST http://localhost:4000/api/testimoni
Content-Type: application/json

{
    "userId"    : 13,
    "name"      : "user 1",
    "rating"    : 4,
    "message"   : "Platform web ini sangat membantu kami untuk melakukan pengecekan kondisi mental"
}
```
```
{
  "msg": "Testimoni created successfully",
  "response": {
    "id": 3,
    "userId": 13,
    "name": "user 1",
    "rating": 4,
    "message": "Platform web ini sangat membantu kami untuk melakukan pengecekan kondisi mental",
    "createdAt": "2023-12-05T13:18:22.154Z"
  }
}
```

### HAPUS TESTIMONI BERDASARKAN ID
```
DELETE  http://localhost:4000/api/testimoni/2
```
```
{
  "msg": "deleted successfully",
  "data": {
    "id": 2,
    "userId": 13,
    "name": "user 1",
    "rating": 4,
    "message": "Platform web ini sangat membantu kami untuk melakukan pengecekan kondisi mental",
    "createdAt": "2023-12-05T13:15:58.188Z"
  }
}
```