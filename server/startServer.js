import Express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const { DEVICE } = process.env;
const port = DEVICE === 'pc' ? 3001: 3002;
const app = new Express();

app.use(Express.static(`build/client/${DEVICE}`));

app.get('*',(req,res)=> {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});