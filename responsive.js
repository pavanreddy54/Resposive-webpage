const bubble = document.querySelector('.bubble');
const elements = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    services: document.getElementById('services'),
    contact: document.getElementById('contact'),
    feedback: document.getElementById('feedback')
};

for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
        elements[key].addEventListener('click', () => handleElementClick(elements[key]));
    }
}

function handleElementClick(element) {
    const coords = element.getBoundingClientRect();
    bubble.style.left = coords.left + 'px';
    bubble.style.top = coords.top + 'px';
    bubble.style.width = coords.width + 'px';
    bubble.style.height = coords.height + 'px';
    bubble.style.padding = '.rem';
    bubble.style.outline= '1px solid black';

    updateFonts(element);
}
window.addEventListener('resize',()=>{
    const selected=document.querySelector('.selected');
    if(selected){
        handleElementClick(selected);
    }
});
function updateFonts(selectedElement) {
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            if (elements[key] !== selectedElement) {
                elements[key].classList.remove('selected');
                elements[key].style.color = 'black';
            }
        }
    }selectedElement.classList.add('selected');
    selectedElement.style.color = 'white';
}
