document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("main");

    const menu = {
        cakes: {
            title: "Cakes",
            image: "cream_cheese_pound_cake.png",
            items: [
                {
                    img: "cream_cheese_pound_cake.png",
                    name: "Cream Cheese Pound Cake - $25",
                    desc: "Very rich pound cake with creamy frosting"
                },
                {
                    img: "s_crunch_cake.png",
                    name: "Strawberry Cake - $28",
                    desc: "Fresh strawberries with whipped icing"
                }
            ]
        },

        cupcakes: {
            title: "Cupcakes",
            image: "mg_cupcakes.png",
            items: [
                {
                    img: "mg_cupcakes.png",
                    name: "Mardi Gras Cupcakes - $10",
                    desc: "Set of 10 cupcakes with whipped cream icing"
                }
            ]
        },

        strawberries: {
            title: "Strawberries & More",
            image: "strawberries.png",
            items: [
                {
                    img: "strawberries.png",
                    name: "White Chocolate Strawberries - $8",
                    desc: "Seven strawberries dipped in white chocolate"
                }
            ]
        }
    };

    function render(view, key) {

        main.innerHTML = "";

        if (view === "categories") {

            const h2 = document.createElement("h2");
            h2.textContent = "Our Menu";
            main.appendChild(h2);

            const h3 = document.createElement("h3");
            h3.textContent = "The Latest";
            main.appendChild(h3);

            main.appendChild(document.createElement("hr"));

            for (let k in menu) {

                const cat = menu[k];

                const btn = document.createElement("button");
                btn.className = "order-btn";

                btn.innerHTML =
                    "<img src='" + cat.image + "' style='width:200px; display:block; border-radius:10px;'>" +
                    "<p>" + cat.title + "</p>";

                btn.addEventListener("click", function () {
                    render("items", k);
                });

                main.appendChild(btn);
            }
        }

        else if (view === "items") {

            const cat = menu[key];

            const back = document.createElement("button");
            back.className = "order-btn";
            back.textContent = "← Back";

            back.addEventListener("click", function () {
                render("categories");
            });

            main.appendChild(back);

            const title = document.createElement("h2");
            title.textContent = cat.title;
            main.appendChild(title);

            for (let i = 0; i < cat.items.length; i++) {

                const item = cat.items[i];

                const article = document.createElement("article");
                article.className = "menu-item";

                article.innerHTML =
                    "<img src='" + item.img + "'>" +
                    "<section>" +
                    "<h4>" + item.name + "</h4>" +
                    "<p>" + item.desc + "</p>" +
                    "</section>";

                main.appendChild(article);
            }
        }
    }

    render("categories");

});