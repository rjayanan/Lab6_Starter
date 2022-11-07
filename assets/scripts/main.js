// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO: - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  let data = JSON.parse(window.localStorage.getItem('recipes'));
  return data;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO: - Get a reference to the <main> element
  let mainElement = document.querySelector('main');
  // A11. TODO: - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  for (let i = 0; i < recipes.length; i++) {
    let newRecipeCard = document.createElement('recipe-card');
    newRecipeCard.data = {
        "imgSrc": recipes[i].imgSrc,
        "imgAlt": recipes[i].imgAlt,
        "titleLnk": recipes[i].titleLnk,
        "titleTxt": recipes[i].titleTxt,
        "organization": recipes[i].organization,
        "rating": recipes[i].rating,
        "numRatings": recipes[i].numRatings,
        "lengthTime": recipes[i].lengthTime,
        "ingredients": recipes[i].ingredients
    };
    mainElement.appendChild(newRecipeCard);

    
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO: - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  let string_recipes = JSON.stringify(recipes)
  window.localStorage.setItem('recipes', string_recipes);
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO: - Get a reference to the <form> element
  let form_element = document.querySelector('form');
  let submit_button = document.querySelector('button[type="submit"]');
  let main = document.querySelector('main');
  submit_button.addEventListener('click', (event) => {
    // Steps B4-B9 will occur inside the event listener from step B3
    // B4. TODO - Create a new FormData object from the <form> element reference above
    let form_data = new FormData(form_element);
    // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
    //            make this easier to read), and then extract the keys and corresponding
    //            values from the FormData object and insert them into recipeObject
    let recipeObject = {};
    for (const [key, value] of form_data) {
      recipeObject[key] = value;
    }
    // B6. TODO - Create a new <recipe-card> element
    let recipe_card = document.createElement('recipe-card');
    // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
    recipe_card.data = recipeObject;
    // B8. TODO - Append this new <recipe-card> to <main>
    main.appendChild(recipe_card);
    // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
    let stored_recipes = getRecipesFromStorage();
    stored_recipes.push(recipeObject);
    saveRecipesToStorage(stored_recipes);
  });

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  let delete_button = document.querySelector('button[class="danger"]');
  // B11. TODO - Add a click event listener to clear local storage button
  delete_button.addEventListener('click', (event) => {
    // Steps B12 & B13 will occur inside the event listener from step B11
    // B12. TODO - Clear the local storage
    window.localStorage.clear();
    // B13. TODO - Delete the contents of <main>
    main.innerHTML = '';
  });
}
