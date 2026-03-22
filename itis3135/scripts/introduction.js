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

function generatePage() {

    // get values (short + simple)
    let first = document.getElementById("firstName").value;
    let middle = document.getElementById("middleName").value;
    let last = document.getElementById("lastName").value;

    let adjective = document.getElementById("adjective").value;
    let animal = document.getElementById("animal").value;

    let caption = document.getElementById("caption").value;
    let statement = document.getElementById("statement").value;

    let personal = document.getElementById("personalBackground").value;

    let quote = document.getElementById("quote").value;
    let author = document.getElementById("quoteAuthor").value;

    let courses = "";
    let courseInputs = document.querySelectorAll(".course");

    for (let i = 0; i < courseInputs.length; i++) {
        if (courseInputs[i].value !== "") {
            courses += "<li>" + courseInputs[i].value + "</li>";
        }
    }

    document.body.innerHTML = `
        <h1>Alana's Charlotte Website</h1>
        <hr>
        <h2>Introduction Form</h2>

        <main>

        <h3>${first} ${middle} ${last} | ${adjective} ${animal}</h3>

        <figure>
            <img src="itis3135/images/kittyyy.jpg">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${statement}</p>

        <ul>
            <li><strong>Personal Background:</strong> ${personal}</li>
        </ul>

        <h3><strong>Courses:</strong></h3>
        <ol>
            ${courses}
        </ol>

        <blockquote>
            “${quote}”
            <cite>— ${author}</cite>
        </blockquote>

        <br>
        <a href="intro_form.html">Reset</a>

        </main>
    `;
}