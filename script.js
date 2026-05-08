const pizzaContainer = document.getElementById("pizzaContainer");

async function loadPizzas() {

    try {

        const response = await fetch("https://dummyjson.com/recipes");

        const data = await response.json();

        const pizzas = data.recipes.slice(0,8)
        ;

        pizzas.slice(0, 10).forEach(pizza => {

            const card = document.createElement("div");

            card.classList.add("pizza-card");

            card.innerHTML = `
                <img src="${pizza.image}" alt="${pizza.name}">
                
                <div class="pizza-info">
                    <h3>${pizza.name}</h3>
                    
                    <p>
                        ${pizza.ingredients.slice(0, 3).join(", ")}
                    </p>
                </div>
            `;

            pizzaContainer.appendChild(card);

        });

    }

    catch (error) {

        console.log("Error fetching pizzas:", error);

    }

}

loadPizzas();