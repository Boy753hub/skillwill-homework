//#1
const button = document.createElement('button')
const div = document.createElement('div')

document.body.appendChild(button)
document.body.appendChild(div)

button.setAttribute('id','button')
div.setAttribute('id','div')

button.innerHTML = "click"
div.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "

button.addEventListener('click', ()=>{
    div.style.display = 'none'
})

//#2

const div = document.createElement('div')
const h2 = document.createElement('h2')
const a = document.createElement('a')

document.body.appendChild(div)
div.appendChild(h2)
div.appendChild(a)

h2.innerHTML = "Gandalf"
a.innerHTML = "Go to profile"

div.setAttribute('id', 'card')
a.setAttribute('href', '#')

//#3

const question1 = document.getElementById('question1');
const question1Input = question1.querySelectorAll('input');
const question2 = document.getElementById('question2');
const question2Input = question2.querySelectorAll('input');
const question3 = document.getElementById('question3');
const question3Input = question3.querySelectorAll('input');
const scoreElement = document.querySelector('.score');
let score = 0


question1Input.forEach(input => {
    const label = question1.querySelector(`label[for="${input.value}"]`)
    input.addEventListener('change', () => {
        if(String(input.value) == 'tbilisi'){
            label.style.backgroundColor = 'green'
            score++
            scoreElement.textContent = `Score: ${score}`;
            // question1Input.forEach(input => (input.disabled = true));
        }else{
            label.style.backgroundColor = 'red';
            // question1Input.forEach(input => (input.disabled = true));
        }
    });
});

question2Input.forEach(input => {
    const label = question2.querySelector(`label[for="${input.value}"]`)
    input.addEventListener('change', () => {
        if(String(input.value) == '69'){
            label.style.backgroundColor = 'green'
            score++
            scoreElement.textContent = `Score: ${score}`;
            // question2Input.forEach(input => (input.disabled = true));
        }else{
            label.style.backgroundColor = 'red';
            // question2Input.forEach(input => (input.disabled = true));
        }
    });
});

question3Input.forEach(input => {
    const label = question3.querySelector(`label[for="${input.value}"]`)
    input.addEventListener('change', () => {
        if(String(input.value) == '2 laric myofnis'){
            label.style.backgroundColor = 'green'
            score++
            scoreElement.textContent = `Score: ${score}`;
            // question3Input.forEach(input => (input.disabled = true));
        }else{
            label.style.backgroundColor = 'red';
            // question3Input.forEach(input => (input.disabled = true));
        }
    });
});
