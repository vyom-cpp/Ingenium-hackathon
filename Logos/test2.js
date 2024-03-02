const loader_container = document.querySelector('.lines');
const content = document.querySelector('.content');

setTimeout(() => {
    loader_container.classList.add('hidden');
    content.classList.add('visible');
}, 2000);