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

    updateFonts(element);
}

function updateFonts(selectedElement) {
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            if (elements[key] !== selectedElement) {
                elements[key].style.color = 'black';
            }
        }
    }
    selectedElement.style.color = 'white';
}
