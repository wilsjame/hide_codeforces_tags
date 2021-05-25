// TODO
// - fix showing problem tags on page load 
// - add to problem page
// - change hidden spacing as to not reflect tag length

// at the moment, codeforces problem tags are of class 'notice'
let elements = document.getElementsByClassName('notice');

// add unique button to each problem tag
for (let i = 0; i < elements.length; i++) {
  elements[i].style.visibility = 'hidden';
  elements[i].id = 'problem_tag_' +  i;
  let tag = document.getElementById('problem_tag_' + i);
  let btn = document.createElement('button'); 
  btn.type = 'button';
  btn.innerHTML = '+';
  btn.addEventListener('click', function() {
    toggle(tag);
  });
  tag.insertAdjacentElement('beforebegin', btn); // 'afterend' works too
}

function toggle(tag) {
  if (tag.style.visibility === 'visible') {
    tag.style.visibility = 'hidden';
  }
  else {
    tag.style.visibility = 'visible';
  }
}
