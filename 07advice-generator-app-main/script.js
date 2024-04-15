const advice = document.querySelector('.dice')
const adviceText = document.querySelector('.advice')
const adviceId = document.querySelector('.head')

async function getAdvice () {
    console.log('clicked');
    fetch("https://api.adviceslip.com/advice")
    .then(async (res) => {
        return res.json()
    })
    .then((res) => {
        const {slip:{id,advice}} = res;
        console.log(res);
        adviceId.innerHTML = "ADVICE #" + id;
        adviceText.innerHTML = advice
    })
}

advice.addEventListener('click', getAdvice)