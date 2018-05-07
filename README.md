# AWS SLS Auth Starter

**Shoutout**: Forked from [@yosriad/serverless-auth](https://github.com/yosriady/serverless-auth)

<!-- TOC -->

* [AWS SLS Auth Starter](#aws-sls-auth-starter)
  * [Endpoints](#endpoints)
    * [Accessing `api/get/protected` Endpoint](#accessing-apigetprotected-endpoint)
  * [Testing Locally](#testing-locally)
    * [Automatically with Ava](#automatically-with-ava)
    * [Manually with Postman](#manually-with-postman)
  * [Eslint](#eslint)

<!-- /TOC -->

---

### Endpoints

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

#### Accessing `api/get/protected` Endpoint

1.  Login to get JWT (POST `api/mock/post/login`)

    > In order to pass the _authentication_ check, you will need to supply a valid JWT in your `Authorization` request header when making calls to a protected endpoint.

2.  Access authorized route (GET `api/get/protected`)
    > In order to pass the _authorization_ check, you will need a JWT belonging to a user with valid permissions. For this example, the user `alechp` is authorized to access `api/get/protected`. Unprivileged is not.

### Testing Locally

> You can test locally thanks to serverless-offline

#### Automatically with Ava

```bash
npm start
```

#### Manually with Postman

1.  **Start Server**

```bash
npm run slsoff
```

![Serverless Offline Start](screenshots/slsoff.png)

2.  **Import [Postman Collection](./SLSAuth.postman_collection.json)**

![Import postman collection](screenshots/postman_open.png)

3.  **Run tests**

![Postman Authentication](screenshots/postman_login.png)

![Postman Authorization](screenshots/postman_protected.png)

---

### Eslint

> Currently disabled

**To enable eslint, remove these from [.eslintignore](./eslintignore)**

```
tests/
utils/
api/
```
