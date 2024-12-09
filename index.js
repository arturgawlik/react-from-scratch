import { createServer } from "node:http";
import { renderToPipeableStream } from "react-dom/server";

createServer((req, res) => {
  const { pipe } = renderToPipeableStream(<HelloReact />, {
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
}).listen(3000);

function HelloReact() {
  return <h1>Hello from React!</h1>;
}
