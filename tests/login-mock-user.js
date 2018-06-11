import { serial as test } from "ava";
import chalk from "chalk";
import got from "got";
// import { authenticate, isAuthorized } from "aws-sls-auther";
const { authenticate, isAuthorized } = require("aws-sls-auther");

const apiLocal = "http://localhost:3000/api";
var token;

test(`${chalk.blue(
  "Authentication ->"
)} authentication get JWT from localhost:3000/api/mock/post/login`, async t => {
  let endpointUri = `${apiLocal}/mock/post/login`;
  token = await authenticate("alechp", "123456");
  t.pass();
});

test(`${chalk.blue(
  "Access protected route ->"
)} pass JWT to http://localhost:3000/api/get/protected`, async t => {
  let authorized = await isAuthorized(token);
  t.pass();
});

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
