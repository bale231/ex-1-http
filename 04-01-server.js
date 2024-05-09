//Exercise downloaded:
// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   console.log("request received");

//   response.statusCode = 200;

//   response.setHeader("Content-Type", "text/html");

//   response.end(
//     "<html><body><h1>This page was served with Node.js!</h1></body></html>"
//   );
// });

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000`);
// });

/*  ---------------------
Exercise made by me:
------------------------- */
const http = require('http'); // Import the Node.js core http module

const server = http.createServer((req, res) => {

  res.statusCode = 200; // Set the response status code to 200 (OK)
  res.setHeader("Content-Type", "text/html"); // Set the content type header to text/html

  // Send the HTML response with basic styling and a message
  res.end(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Exercise one, HTTP</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          /* Reset styles for a clean base */
          body,
          html {
            font-family: "Intro", Arial, Helvetica, sans-serif;
            line-height: 1;
            font-size: 16px;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ol,
          ul {
            margin: 0 0 1rem 0;
            padding: 0;
          }
          ol,
          ul {
            padding-left: 20px;
            line-height: 1.5;
          }
          img {
            height: auto;
          }
          h1 {
            font-size: 4rem;
          }
          h2 {
            font-size: 3rem;
          }
          h3 {
            font-size: 2rem;
          }
          h4 {
            font-size: 1rem;
          }
          h5 {
            font-size: 0.8rem;
          }
          h6 {
            font-size: 0.6rem;
          }
          a {
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>Hello, and welcome to my first server...</h1>
          <code>server port on: http://localhost:3000/</code> </div>
      </body>
    </html>
    `
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
