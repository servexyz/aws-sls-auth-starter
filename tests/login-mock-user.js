import { serial as test } from "ava";
import chalk from "chalk";
import fs from "fs";
import got from "got";

const apiLocal = "http://localhost:3000/api";
var token;

test(`${chalk.blue(
  "Access public route ->"
)} localhost:3000/api/get/public`, async t => {
  let endpointUri = `${apiLocal}/get/public`;
  const { body } = await got(endpointUri);
  console.log(`
    ${chalk.yellow("------------")} \n
    ${chalk.green(endpointUri)}\n
    ${chalk.blue("Body")}:\n ${JSON.stringify(JSON.parse(body), null, 2)}
  `);
  t.pass();
});

test(`${chalk.blue(
  "Authentication ->"
)} authentication get JWT from localhost:3000/api/mock/post/login`, async t => {
  let endpointUri = `${apiLocal}/mock/post/login`;
  const { body } = await got.post(endpointUri, {
    body: {
      username: "alechp",
      password: "123456"
    },
    json: true
  });
  token = body.token;
  console.log(`
    ${chalk.yellow("------------")} \n
    ${chalk.green(endpointUri)}\n
    ${chalk.blue("JWT")}:\n ${body.token}
  `);
  t.pass();

  /*
      */
});

test(`${chalk.blue(
  "Access protected route ->"
)} pass JWT to http://localhost:3000/api/get/protected`, async t => {
  let endpointUri = `${apiLocal}/get/protected`;
  const { body } = await got(endpointUri, {
    headers: {
      Authorization: token
    }
  });
  console.log(`
    ${chalk.yellow("------------")} \n
    ${chalk.green(endpointUri)}\n
    ${chalk.blue("JWT")}:\n ${JSON.stringify(JSON.parse(body), null, 2)}
  `);
  t.pass();
});
