const Items = document.querySelectorAll('.item');
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container')

Items.forEach((val) => {
    val.addEventListener('click', () => {
        result.innerHTML = val.innerHTML;
    });
});

Items.forEach((val) => {
    val.addEventListener('click', activ);
});

submit.addEventListener('click', subClickFun);

function activ(event) {
    const active = document.querySelector('.footer_items>.active_item')
    active.classList.remove('active_item')
    event.target.classList.add('active_item')
}

function subClickFun() {
    container.style.display = 'none';
}