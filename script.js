const themeButton=document.getElementById('themeButton');
const form=document.getElementById('taskForm');
const input=document.getElementById('taskInput');
const list=document.getElementById('taskList');

themeButton.addEventListener('click',()=>document.body.classList.toggle('dark'));

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const value=input.value.trim();
  if(!value){alert('Vui lòng nhập công việc.');return;}
  const li=document.createElement('li');
const li = document.createElement('li');
li.textContent = value;

li.addEventListener('click', () => {
  li.classList.toggle('completed');
});

list.appendChild(li);});
