import express from 'express';
import renderer from './helpers/renderer';

const app = new express();

app.use(express.static('build/client'));

app.get('*',(req,res)=> {
  res.send(renderer(req));
});

app.listen(3000, ()=> {
  console.log('listening on port 3000');
});