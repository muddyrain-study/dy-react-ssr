import getLinks from './getLinks';
import getScript from './getScript';

export default component => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${getLinks()}
  </head>
  <body>
    <div id="root">${component}</div>
    ${getScript()}
  </body>
  </html>`;
  return html;
};
