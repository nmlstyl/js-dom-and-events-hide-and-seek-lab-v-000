function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  // return  document.querySelectorAll('#grand-node div div div div')[0]
  let node = document.getElementById('grand-node').querySelectorAll('div')
  let nodeLength = node.length - 1
  return node[nodeLength]
}

function increaseRankBy(n){
  let list = document.getElementsByClassName('ranked-list')
  let elements;
  for (let i=0; i < list.length; i++){
    let li = []
    li = list[i].querySelectorAll('ul li')
    for (let a=0; a < li.length; a++){
      li[a].innerHTML = (parseInt(li[a].innerHTML) + n).toString()
    }
  }
}
