document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        console.log(tr);
    });

    for (let i = 0; i < ingredients.children.length; i++) {
        console.log(ingredients.children[i]);
    }
});
