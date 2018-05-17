export default (cssObj) => (...specifies) => {
  if(!specifies){
    return '';
  }
  return specifies.map(specify => {
    if(typeof specify === 'function'){
      return specify();
    }
    if(typeof specify === 'undefined'){
      return '';
    }
    return `${specify} ${cssObj[specify]}`;
  }).join(' ');
}