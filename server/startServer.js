import express from 'express';
import renderer from './helpers/renderer';

const app = new express();

console.log(global);

// const port = device === "pc" ? 3001 : 3002;
// const { device } = __ENV__;

// console.log(device);

app.use(express.static('build/client'));

app.get('*',(req,res)=> {
  res.send(renderer(req));
});

app.listen(3000, ()=> {
  console.log('listening on port 3000');
});