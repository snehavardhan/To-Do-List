function get_todos(){
  var todoArray = new Array;
  var todos_str = localStorage.getItem('todo');
  if(todos_str != null){
    todoArray = JSON.parse(todos_str);
  }
  return todoArray;
}

function add(){
  var task = document.getElementById("task").value;
  var todoArray = get_todos();
  todoArray.push(task);
  localStorage.setItem('todo', JSON.stringify(todoArray));
  show();
  return false;
}

function show(){
  var html = '<ul>';
  var todoArray = get_todos();
  for(var i=0; i<todoArray.length; i++){
    html += '<li>' + todoArray[i] +'<span></span><button id="' +i+'" class="remove">X</button></li>';
  }
  html += '</ul>';

  document.getElementById("showList").innerHTML = html;
  var buttons = document.getElementsByClassName("remove");
  for(var j=0;j<buttons.length; j++){
    buttons[j].addEventListener('click', remove);
  }
}

function remove(){
  var id = this.getAttribute('id');
  var todoArray = get_todos();
  todoArray.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todoArray));
  show();
  return false;
}

document.getElementById("addButton").addEventListener('click', add);
show();
