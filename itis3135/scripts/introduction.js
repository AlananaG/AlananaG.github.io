const form = document.getElementById("introForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    generatePage();
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.querySelectorAll("input, textarea").forEach(el => {
        el.value = "";
    });
});

document.getElementById("addCourse").addEventListener("click", function() {

    const list = document.getElementById("courseList");

    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "course";
    input.placeholder = "New Course";

    li.appendChild(input);
    list.appendChild(li);
});