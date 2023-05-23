import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

export default (req, res) => {
  const component = renderToString(<App />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
    ${component}111
    </div>
  </body>
  </html>`;
  res.send(html);
};
