const adviceBody = document.querySelector('.advice-container');
const button = document.querySelector('button');
let p = document.querySelector('#filler');
let advice;

async function getAdvice() {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        advice = response.data.slip.advice;
    }
    catch (err) {
        console.log('Cats exploded', err);
    }

};

getAdvice();

button.addEventListener('click', () => {
    setTimeout(() => {
        getAdvice();
        p.innerText = advice;
    }, 100);
});