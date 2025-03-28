const togglePredictionButton = document.querySelector('.prediction__button');
const prediction = document.querySelector('.prediction');
const predictionFooter = document.querySelector('.prediction__footer');
const text = document.querySelector('.prediction__text');

checkOverflow();

window.addEventListener('resize', () => {
    checkOverflow()
})

function checkOverflow() {
    predictionFooter.style.display = isOverflowing(text) ? 'block' : 'none';
}

function isOverflowing(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}


togglePredictionButton.addEventListener('click', togglePrediction);

const initialHeight = text.style.maxHeight;
function togglePrediction() { 
    prediction.classList.toggle('prediction--collapsed');

    const isExpanded = text.style.maxHeight === initialHeight;

    text.style.maxHeight = isExpanded
        ? text.scrollHeight + 'px'
        : initialHeight
}

