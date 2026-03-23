document.getElementById("generateHTML").addEventListener("click", function() {

    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let adjective = document.getElementById("adjective").value;
    let animal = document.getElementById("animal").value;

    let image = document.getElementById("image").value;
    let caption = document.getElementById("caption").value;

    let statement = document.getElementById("statement").value;
    let personal = document.getElementById("personalBackground").value;

    let quote = document.getElementById("quote").value;
    let author = document.getElementById("quoteAuthor").value;

    // courses
    let courses = "";
    let courseInputs = document.querySelectorAll(".course");

    for (let i = 0; i < courseInputs.length; i++) {
        if (courseInputs[i].value !== "") {
            courses += `    <li>${courseInputs[i].value}</li>\n`;
        }
    }

    let htmlCode = `
<h2>Introduction HTML</h2>

<h3>${first} ${last} | ${adjective} ${animal}</h3>

<figure>
    <img src="${image}">
    <figcaption>${caption}</figcaption>
</figure>

<p>${statement}</p>

<ul>
    <li><strong>Personal Background:</strong> ${personal}</li>
</ul>

<h3>Courses:</h3>
<ol>
${courses}</ol>

<blockquote>
    "${quote}"
    <cite>— ${author}</cite>
</blockquote>
`;

    // DISPLAY WITH HIGHLIGHT.JS
    document.body.innerHTML = `
        <h2>Introduction HTML</h2>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

        <pre><code class="language-html">${htmlCode}</code></pre>

        <br>
        <a href="intro_form.html">Reset</a>

        <script>hljs.highlightAll();</script>
    `;
});