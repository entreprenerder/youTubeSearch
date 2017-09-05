import config from './config';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

// Pug View Engine
server.set('view engine', 'jade');

// Index.jade
server.get('/', (req, res) => {
  res.render('index', {title:"React Environment"});
});

server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
