import { test } from "ava";
import { honesty } from "npm-starter-sample-module";

test("honesty is importedent", t => {
  t.true(honesty());
});
