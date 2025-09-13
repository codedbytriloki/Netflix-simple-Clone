const questions = document.querySelectorAll("li");
const answers = document.querySelectorAll('.answer')
const Icons = document.querySelectorAll('.icon');


questions.forEach((question, idx) => {
   question.addEventListener('click', () => {
    displayAnswer(idx);
   })
})

function displayAnswer(idx){
  answers.forEach((answer, index) => {
    if(index == idx){
      answer.classList.toggle('active');
    }
    else{
      answer.classList.remove('active');
    }
    Icons.forEach((icon, index) => {
      icon.innerHTML = "";
      icon.innerHTML = `<i class="fa-solid fa-plus"></i>`;
      if(index == idx){
        icon.innerHTML = "";
        icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      }
    })
  });
}
