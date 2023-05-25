import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import getScript from './getScript';
import getLinks from './getLinks';
import getHtml from './getHtml';

export default (req, res) => {
  const context = {};
  const component = renderToString(
    <App location={req.path} context={context} />
  );
  res.send(getHtml(component));
};
