document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    ingredients.childNodes.forEach((tr) => {
        console.log(tr);
    });
});
