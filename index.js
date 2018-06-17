function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  // return  document.querySelectorAll('#grand-node div div div div')[0]
  let node = document.getElementById('grand-node').querySelectorAll('div')

  for (let i=0; i < node.length; i++)

}
