function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  let node = document.querySelector('#grand-node')
  debugger;
  for (const div in node){
    debugger;
  }
}
