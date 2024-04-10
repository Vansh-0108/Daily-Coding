const card = document.querySelector('.card')
const questions = document.querySelectorAll(".qna")

questions.forEach((ques) => {
    const icon = ques.querySelector('.ques img');
    const ans = ques.querySelector('.ans');

    ques.addEventListener('click', () => {
        console.log(icon.src , ans.innerHTML);

        if(!icon.classList.contains('active')){
            icon.classList.add('active');
            icon.src = './assets/images/icon-minus.svg';
            ans.style.display = 'flex';
        }
        else{
            icon.classList.remove('active');
            icon.src = './assets/images/icon-plus.svg';
            ans.style.display = 'none';
            answer.style.maxHeight = null;
            card.style.height = "55vh";
        }
    })
})