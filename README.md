# LOGIN SOLID

## Angel Jesus Oni Terceros

## Get Started

```script
npm run dev
```

```script
docker compose up -d
```

## API

http://localhost:3000

Los endpoints disponibles son:

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/changeLogger`
- POST `/api/auth/changeCripto`

### /api/auth/register

```json
{
  "userName": "jesus",
  "name": "Angel Jesus Oni",
  "password": "123456"
}
```

### /api/auth/login

```json
{
  "userName": "Angel",
  "password": "123456"
}
```

### /api/auth/changeLogger

```json
{
  "option": 2
}
```

### /api/auth/changeCripto

```json
{
  "option": 2
}
```
