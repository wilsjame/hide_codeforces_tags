// TODO
// - fix showing problem tags on page load 
// - add to problem page
// - change hidden spacing as to not reflect tag length

// at the moment, codeforces problem tags are of class 'notice'
let tags = document.getElementsByClassName('notice');

// add unique button to each problem tag
for (let i = 0; i < tags.length; i++) {
  tags[i].style.visibility = 'hidden';
  let btn = document.createElement('button'); 
  btn.type = 'button';
  btn.innerHTML = '+';
  btn.addEventListener('click', function() {
    toggle(tags[i]);
  });
  tags[i].insertAdjacentElement('beforebegin', btn); // 'afterend' works too
}

function toggle(tag) {
  if (tag.style.visibility === 'visible') {
    tag.style.visibility = 'hidden';
  }
  else {
    tag.style.visibility = 'visible';
  }
}
