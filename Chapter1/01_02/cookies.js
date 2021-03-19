document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    let total = 0;

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        console.log(tr);

        if (tr.id == 'totals') {
            console.log(total);
        } else {
            let td = tr.children[1];
            let weight = parseFloat(td.innerText);
            console.log(td, weight);

            total += weight;
        }
    });
});
