document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector('form')

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const taskValue = document.getElementById("new-task-description");
		const priorityValue = document.getElementById("priority").value;
		buildToDo(taskValue.value, priorityValue);
		form.reset();
  })  
});


function buildToDo(todo, priority){
	let ul = document.createElement('ul');
	let btn = document.createElement('button');
	btn.addEventListener('click', handleDelete);
	btn.textContent = ' x';
	ul.textContent = `${todo} `;
	if (priority === "high"){
		ul.className = "high";
	} else if (priority === "medium"){
		ul.className = "medium";
	} else if (priority === "low"){
		ul.className = "low";
	}
	ul.appendChild(btn);
	document.querySelector('h2').appendChild(ul);
}

function handleDelete(e){
	e.target.parentNode.remove()
}

