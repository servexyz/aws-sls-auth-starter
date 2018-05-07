# AWS SLS Auth Starter

* **Shoutout**: Forked from [@yosriad/serverless-auth](https://github.com/yosriady/serverless-auth)
* **Purpose**: This is a serverless authorization example using JSON Web Tokens (JWTs)

---

### Routes

| Method | Endpoint              | Users with access | Header          | Body |
| :----- | :-------------------- | :---------------- | :-------------- | :--- |
| GET    | `api/get/public`      | All               | No              | No   |
| POST   | `api/mock/post/login` | All               | No              | Yes  |
| GET    | `api/get/protected`   | `alechp`          | `Authorization` | No   |

**Login Body**

```json
{
  "username": "alechp",
  "password": "123456"
}
```

### Sequence

1.  Login to get JWT (POST `api/mock/post/login`)

    > In order to pass the _authentication_ check, you will need to supply a valid JWT in your `Authorization` request header when making calls to a protected endpoint.

2.  Access authorized route (GET `api/get/protected`)
    > In order to pass the _authorization_ check, you will need a JWT belonging to a user with valid permissions. For this example, the user `alechp` is authorized to access `api/get/protected`. Unprivileged is not.

### Testing Locally

> You can test locally thanks to serverless-offline

**Automatically with Ava**
`npm start`

**Manually**
`sls offline start`
![Serverless Offline Start](slsoff.png)

##### Common Error

**Remember to start your server**

```
  RequestError (GotError) {
    code: 'ECONNREFUSED',
    host: 'localhost:3000',
    hostname: 'localhost',
    method: 'POST',
    path: '/api/mock/post/login',
    protocol: 'http:',
    url: 'http://localhost:3000/api/mock/post/login',
    message: 'connect ECONNREFUSED 127.0.0.1:3000',
```
