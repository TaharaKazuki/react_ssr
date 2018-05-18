import pcRender from 'server/pc/renderer';
import spRender from 'server/sp/renderer';

const { DEVICE } = process.env;
const deviceRender = DEVICE === 'pc' ? pcRender : spRender;

export default (req) => deviceRender(req);