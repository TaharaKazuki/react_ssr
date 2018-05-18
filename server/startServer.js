import Express from 'express';
import renderer from './helpers/renderer';

const app = new Express();

const { DEVICE } = process.env;

const port = DEVICE === 'pc' ? 3001: 3002;

app.use(Express.static('build/client'));

app.get('*',(req,res)=> {
  res.send(renderer(req));
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});