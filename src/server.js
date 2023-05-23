const express = require('express');

const app = express();
app.get('*', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      hello ssr1122
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(8080, () => {
  console.log('listen to 8080 port');
});
