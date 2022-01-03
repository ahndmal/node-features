import { createServer } from "http2";

const server = createServer();

server.on("stream", (stream, headers) => {
  stream.respond({
    "content-type": "text/html; charset=utf-8",
    ":status": 200,
  });
  stream.end("<h1>Hello there from Nodejs</h1>");
});

server.listen(7000);
