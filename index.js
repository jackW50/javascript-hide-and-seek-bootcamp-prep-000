function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return querySelector('#nested.target');
}

function increaseRankBy(n) {
  let list2 = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list2.length; i++) {
    list2[i].innerHTML = (i + parseInt(n));
  }
}

function deepestChild() {
    let list3 = document.querySelector('div#grand-node div div div div');
    return list3;
}