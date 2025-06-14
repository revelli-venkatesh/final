const recipes = [
  {
    name: "Classic Pancakes",
    image: "pancakes.png",
    category: "breakfast",
    time: "20 mins",
    ingredients: [
      "1½ cups all-purpose flour", "3½ tsp baking powder", "1 tsp salt", "1 tbsp sugar",
      "1¼ cups milk", "1 large egg", "3 tbsp melted butter", "1 tsp vanilla extract"
    ],
    steps: [
      "Whisk flour, baking powder, salt, and sugar.",
      "Mix egg, milk, butter, and vanilla.",
      "Combine wet and dry, mix gently.",
      "Pour onto hot pan, flip after bubbles form.",
      "Serve warm with toppings."
    ]
  },
  {
    name: "Veggie Omelette",
    image: "omelette.png",
    category: "breakfast",
    time: "15 mins",
    ingredients: [
      "2 eggs", "2 tbsp milk", "Salt & pepper", "1 tbsp butter",
      "¼ cup bell peppers", "2 tbsp onion", "2 tbsp cheese"
    ],
    steps: [
      "Whisk eggs, milk, salt, pepper.",
      "Sauté veggies in butter.",
      "Pour eggs, add veggies & cheese.",
      "Fold and cook till done."
    ]
  },
  {
    name: "Refreshing Salad",
    image: "salad.png",
    category: "lunch",
    time: "15 mins",
    ingredients: [
      "2 cups greens", "1 cup tomatoes", "½ cucumber", "¼ red onion",
      "¼ cup feta", "2 tbsp olive oil", "1 tbsp balsamic", "Salt & pepper"
    ],
    steps: [
      "Mix greens, veggies, onion.",
      "Whisk oil, balsamic, seasoning.",
      "Toss and top with feta."
    ]
  },
  {
    name: "Grilled Chicken",
    image: "chicken.png",
    category: "lunch",
    time: "25 mins",
    ingredients: [
      "2 chicken breasts", "2 tbsp olive oil", "1 tsp garlic powder",
      "1 tsp paprika", "Salt & pepper", "1 lemon"
    ],
    steps: [
      "Rub chicken with oil, spices.",
      "Grill until cooked through.",
      "Squeeze lemon over and serve."
    ]
  },
  {
    name: "Cheesy Pizza",
    image: "pizza.png",
    category: "dinner",
    time: "30 mins",
    ingredients: [
      "1 pizza dough", "½ cup sauce", "1½ cups cheese",
      "Pepperoni (opt)", "1 tsp oregano", "1 tbsp olive oil"
    ],
    steps: [
      "Preheat oven to 475°F.",
      "Spread sauce on dough.",
      "Add cheese, toppings, oregano.",
      "Bake 12–15 mins."
    ]
  },
  {
    name: "Pasta Delight",
    image: "pasta.png",
    category: "dinner",
    time: "20 mins",
    ingredients: [
      "200g pasta", "2 tbsp olive oil", "3 garlic cloves", "1 cup tomatoes",
      "½ cup basil", "½ cup parmesan", "Salt & pepper"
    ],
    steps: [
      "Cook pasta, drain.",
      "Sauté garlic in oil.",
      "Add tomatoes, then pasta, basil.",
      "Toss and top with cheese."
    ]
  }
];

function displayRecipes(list) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = '';
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p><strong>Time:</strong> ${recipe.time}</p>
      <p><strong>Category:</strong> ${recipe.category}</p>
      <details>
        <summary>Ingredients & Instructions</summary>
        <h4>Ingredients:</h4>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h4>Steps:</h4>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      </details>
    `;
    container.appendChild(card);
  });
}

function filterRecipes(category) {
  if (category === 'all') {
    displayRecipes(recipes);
  } else {
    const filtered = recipes.filter(r => r.category === category);
    displayRecipes(filtered);
  }
}

window.onload = () => displayRecipes(recipes);
