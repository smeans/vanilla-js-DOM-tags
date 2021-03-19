document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    let total = 0;

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        console.log(tr);
        let td = tr.children[1];
        let weight = td.nodeValue;
        console.log(td, weight);
    });
});
