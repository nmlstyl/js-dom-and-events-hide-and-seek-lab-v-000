function getFirstSelector(selector){
  return document.querySelector(selector)
}

<<<<<<< HEAD
function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  for (const div in document.querySelector('grand-node')){
    debugger;
  }
=======
function nestedTarget(nested){
  return nested.target
>>>>>>> 37824b98ba76f7071f17b07bce7b43a38c238ae0
}
