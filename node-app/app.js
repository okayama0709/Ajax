const http = require("http");
const fs = require("fs");

const title = ["top", "about", "work"];
const content = [
  "トップページです。",
  "アバウトぺーじです。",
  "作品ページです。",
];

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  const renderPage = (title, content) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        response.end("Error: " + err.message);
        return;
      }
      const data2 = data
        .replace(/@@title@@/g, title)
        .replace(/@@content@@/g, content);
      response.end(data2);
    });
  };

  if (request.url === "/") {
    renderPage(title[0], content[0]);
  } else if (request.url === "/about") {
    renderPage(title[1], content[1]);
  } else if (request.url === "/work") {
    renderPage(title[2], content[2]);
  } else {
    response.end("NO PAGE");
  }
});

server.listen(3001);
