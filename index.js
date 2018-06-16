function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  for (const div in document.querySelector('grand-node')){
    debugger;
  }
}
