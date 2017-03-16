function getFirstSelector(selector){
  const select=document.querySelector(selector);
  return select;

};

function nestedTarget(){
  const nest=document.querySelector('div#nested .target');
  return nest;
};

function increaseRankBy(n){
  const rankedLists= document.querySelectorAll('ul.ranked-list li');
  for(let i=0; i<rankedLists.length; i++){
      let rank= parseInt(rankedLists[i].innerHTML);
      rank+=n;
      rankedLists[i].innerHTML=rank.toString();
  }
}

function deepestChild(){
  const deepest= document.querySelectorAll('div#grand-node div');
  return deepest[deepest.length-1];
}
