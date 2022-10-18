const loadMeads = (search) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals_container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal.idMeal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick='loadMealDetail(${meal.idMeal})' class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">discription & How to cook : ${meal.strInstructions.slice(0, 250)}</p>
            </div>
      </div>
        `
        mealsContainer.appendChild(mealDiv);

    })

}
const searchFood= ()=> {
    const inputField = document.getElementById('search-field')
    const searchText = inputField.value ;
    loadMeads(searchText);
    inputField.value = '';
}

const loadMealDetail=(idMeal) =>{

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails=meal => {
    console.log(meal);
}



searchFood('')
