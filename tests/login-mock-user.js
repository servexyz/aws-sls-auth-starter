import test from "ava";
import got from "got";

test("foobar", async t => {
  const response = await got("sindresorhus.com")
    .on("downloadProgress", progress => {
      console.log(`Progress: ${progress}`);
      // Report download progress
    })
    .on("uploadProgress", progress => {
      // Report upload progress
    });

  console.log(response);
  t.pass();
});
