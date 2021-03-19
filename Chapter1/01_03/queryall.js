/* eslint no-undef: "error" */
/* eslint-env browser */

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea[name=source]');
    textarea.addEventListener('input', (e) => {
        refreshOutput(e.target.value);
    });

    document.forms.queryall.addEventListener('submit', (e) => {
        refreshQuery(e.target.selector.value);
    })

    refreshOutput(textarea.value);
});

function refreshOutput(html) {
    const output = document.querySelector('#output');

    output.innerHTML = html;
}

function refreshQuery(selector) {
    console.log(selector);
}
