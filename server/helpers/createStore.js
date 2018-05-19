import pcStore from 'server/pc/createPcStore';
import spStore from 'server/sp/createSpStore';

const { DEVICE } = process.env;
const createStore = DEVICE === 'pc' ? pcStore : spStore;

export default () => createStore;