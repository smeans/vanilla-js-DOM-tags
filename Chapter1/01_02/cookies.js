document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    let total = 0;

    Array.prototype.forEach.call(ingredients.children, (tr) => {
        console.log(tr);

        if ('id' in tr.attributes
                && tr.attributes['id'].nodeValue == 'totals') {
            tr.children[1].innerText = total;
        } else {
            let td = tr.children[1];
            let weight = parseFloat(td.innerText);
            console.log(td, weight);

            total += weight;
        }
    });
});
