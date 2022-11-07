// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO: - Attach the shadow DOM to this Web Component (leave the mode open)
    let shadowElement = this.attachShadow({mode: 'open'});
    // A2. TODO: - Create an <article> element - This will hold our markup once our data is set
    let articleElement = document.createElement('article');
    // A3. TODO: - Create a style element - This will hold all of the styles for the Web Component
    let styleElement = document.createElement('style');
    // A4. TODO: - Insert all of the styles from cardTemplate.html into the <style> element you just made
    const cardTemplateStyle = document.createElement('style');  // FIXME: not sure if this is correct
    cardTemplateStyle.innerText = document.querySelector('style');
    styleElement.appendChild(cardTemplateStyle);
    // A5. TODO: - Append the <style> and <article> elements to the Shadow DOM
    shadowElement.appendChild(articleElement);
    shadowElement.appendChild(styleElement);
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
   // If nothing was passed in, return
   if (!data) return;

   // A6. TODO: - Select the <article> we added to the Shadow DOM in the constructor
   let articleElementToSet = articleElement; // FIXME: not sure if this is correct

   // A7. TODO: - Set the contents of the <article> with the <article> template given in
   //           cardTemplate.html and the data passed in (You should only have one <article>,
   //           do not nest an <article> inside another <article>). You should use Template
   //           literals (tempalte strings) and element.innerHTML for this.

   // img
   let img = document.createElement('img');
   img.src = "";
   // title
   let title = document.createElement('p');
   title.innerHTML = "";
   // organization
   let organization = document.createElement('p');
   organization.innerHTML = "";
   // nested div
   let rating = document.createElement('div');
   let spanElemDiv = document.createElement('span');
   spanElem.innerHTML = "";
   let imgDiv = document.createElement('img');
   img.src = "";
   rating.appendChild(spanElemDiv);
   rating.appendChild(imgDiv);
   // time
   let time = document.createElement('time');
   time.innerHTML = "";
   // ingredients
   let ingredients = document.createElement('p');
   ingredients.innerHTML = "";

   // append to articleElement
   articleElement.appendChild(img);
   articleElement.appendChild(title);
   articleElement.appendChild(organization);
   articleElement.appendChild(rating);
   articleElement.appendChild(time);
   articleElement.appendChild(ingredients);

  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
