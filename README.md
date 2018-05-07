# AWS SLS Auth Starter

This is a serverless authorization example using JSON Web Tokens (JWTs.). Forked from [@yosriad/serverless-auth](https://github.com/yosriady/serverless-auth)

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

`sls offline start`
![Serverless Offline Start](slsoff.png)
