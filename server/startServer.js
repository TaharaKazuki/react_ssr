import 'babel-polyfill';
import Express from 'express';
import { matchRoutes } from 'react-router-config';
import pcRoute from 'shared/pc/Routes';
import spRoute from 'shared/sp/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const { DEVICE } = process.env;
const port = DEVICE === 'pc' ? 3001 : 3002;
const route = DEVICE === 'pc' ? pcRoute : spRoute;
const app = new Express();

app.use(Express.static(`build/client/${DEVICE}`));

app.get('*',(req,res)=> {
  const store = createStore(req);

  const promise = matchRoutes(route, req.path).map(({ route })=>{
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promise).then(() => {
    res.send(renderer(req, store));
  });

});

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});