document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    ingredients.children.forEach((tr) => {
        console.log(tr);
    });
});
