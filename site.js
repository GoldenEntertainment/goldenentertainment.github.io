const p = document.querySelector('p')
        
        setTimeout(() => {
            p.textContent = "Hi! I'm TJ, and this is my personal homepage." + "Welcome!"
        }, 3000)

localStorage.setItem('visited', 'true');

if (!localStorage.getItem('visited')) {
    p.textContent = "It's a secret to everybody. if you see this, know that i like pizza and wings!";
}

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage++
    showImages()
}, 3000)

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

 // Save tasks to localStorage
        function saveTasks() {
            const tasks = [];
            document.querySelectorAll('#taskList li').forEach(li => {
            tasks.push(li.textContent.replace('Delete', '').trim());
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        // Load tasks from localStorage
        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <button onclick="this.parentElement.remove(); saveTasks();">Delete</button>`;
            document.getElementById('taskList').appendChild(li);
            });
        }
        
        // Update addTask to save
        const originalAddTask = addTask;
        addTask = function() {
            originalAddTask();
            saveTasks();
        }
        
        // Load tasks on page load
        loadTasks();
