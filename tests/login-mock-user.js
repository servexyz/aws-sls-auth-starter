import test from "ava";
import fs from "fs";
import got from "got";

const apiLocal = "http://localhost:3000/api";

test("get JWT from localhost:3000/api/mock/post/login", async t => {
  let endpointUri = `${apiLocal}/mock/post/login`;
  const { body } = await got.post(endpointUri, {
    body: {
      username: "alechp",
      password: "123456"
    },
    json: true
  });
  console.log(`token: ${body.token}`);
  t.pass();
});
