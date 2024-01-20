const input = document.getElementById('input-text');
const list = document.getElementById('list');

const into = document.getElementById('list');
const button = document.getElementById('btn');

input.addEventListener('keyup', function(event) {
 
  if (event.keyCode === 13) {
   
    button.click();
  }
});

function logic() {
  if (input.value === '') {
    alert("Please add some task");
  } else {
    console.log('list appended');
    let li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);

    let span = document.createElement('span');
    span.innerText = '\u00d7';
    li.appendChild(span);

    
  }
  input.value = '';
  savedata();
}

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    savedata();

  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    savedata();
  }
}, false);


function savedata(){
  localStorage.setItem('data',list.innerHTML);
}

function showtask(){
  list.innerHTML = localStorage.getItem('data');

}
showtask();