const recipes = [
    {
        title: "Chole Bhature",
        ingredients: [
            "Chickpeas (Chole)",
            "Onion",
            "Tomatoes",
            "Ginger Garlic Paste",
            "Cumin Seeds",
            "Corriander Powder",
            "Garam Masala",
            "All purpose flour"
        ],
        instructions: [
            " Soak 1 cup of chickpeas overnight. Pressure cook with water, salt, and a tea bag (optional) until soft..",
            " Heat oil in a pan, add cumin seeds, and sauté chopped onions until golden. Add ginger-garlic paste and cook until fragrant ",
            " Add pureed tomatoes, coriander powder, garam masala, and salt. Cook until the oil separates. Add the cooked chickpeas and simmer for 15-20 minutes",
            " Mix 2 cups of all-purpose flour, 2 tablespoons of semolina, 1/2 cup yogurt, a pinch of baking powder, and salt. Knead into a soft dough using water Let it rest for 1 hour",
            " Garnish the chole with coriander leaves and serve hot with the freshly fried bhature"
        ],
    },
    {
        title: "Chicken Curry",
        ingredients: [
            "500g chicken breast, diced",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 tbsp curry powder",
            "400ml coconut milk",
            "Salt",
            "Pepper"
        ],
        instructions: [
            "Sauté onion and garlic until soft.",
            "Add the chicken and cook until browned.",
            "Stir in the curry powder and cook for 1 minute.",
            "Pour in the coconut milk and bring to a simmer.",
            "Cook until the chicken is cooked through.",
            "Season with salt and pepper to taste.",
            "Serve with rice."
        ]
    },
    {
        title: "Pancakes",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "1/2 tsp salt",
            "1 cup milk",
            "1 egg",
            "2 tbsp melted butter"
        ],
        instructions: [
            "Mix flour, sugar, baking powder, and salt in a bowl.",
            "In another bowl, whisk milk, egg, and melted butter.",
            "Combine the wet and dry ingredients.",
            "Heat a non-stick pan over medium heat.",
            "Pour 1/4 cup of batter onto the pan for each pancake.",
            "Cook until bubbles form on the surface, then flip and cook until golden.",
            "Serve with syrup or your favorite toppings."
        ]
    }
];

const recipeList = document.getElementById("recipe-list");

recipes.forEach((recipe, index) => {
    const recipeEl = document.createElement("div");
    recipeEl.classList.add("recipe");

    recipeEl.innerHTML = `
        <h2>${recipe.title}</h2>
        <button onclick="toggleDetails(${index})">View Details</button>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="instructions">
            <h3>Instructions:</h3>
            <ul>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ul>
        </div>
    `;

    recipeList.appendChild(recipeEl);
});

function toggleDetails(index) {
    const ingredientsEl = document.querySelectorAll(".ingredients")[index];
    const instructionsEl = document.querySelectorAll(".instructions")[index];
    const isVisible = ingredientsEl.style.display === "block";

    if (isVisible) {
        ingredientsEl.style.display = "none";
        instructionsEl.style.display = "none";
    } else {
        ingredientsEl.style.display = "block";
        instructionsEl.style.display = "block";
    }
}
