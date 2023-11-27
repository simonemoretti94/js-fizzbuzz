//script

let vettore = [];

let i;

let div_fizzbuzz;

const container_html = document.querySelector('section#container');

console.log(container_html.classList);


for (let i = 1; i <= 100; i++) {

    div_fizzbuzz = document.createElement('div');
    div_fizzbuzz.classList.add('d-flex','justify-content-center','align-items-center', 'flex-wrap','my-2');

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, ': FizzBuzz');
        vettore.push(i);
        console.log(vettore[i]);

        div_fizzbuzz.classList.add('fizzbuzz');
        div_fizzbuzz.innerText ='FizzBuzz!';
    }
    else if (i % 3 === 0) {
        console.log(i, ': Fizz');

        div_fizzbuzz.classList.add('fizz');
        div_fizzbuzz.innerText ='Fizz!';
    }

    else if (i % 5 === 0) {
        console.log(i, ': Buzz');

        div_fizzbuzz.classList.add('buzz');
        div_fizzbuzz.innerText ='Buzz!';
    }
    else {
        console.log(i);

        div_fizzbuzz.classList.add('keine_fizzbuzz');
        div_fizzbuzz.innerText = i;
    }

    container_html.append(div_fizzbuzz);
}

console.log('array length: ',vettore.length);

let c;

for (c = 0; c < vettore.length; c ++ ) {
    console.log('Vettore pos: ', c, ' Valore: ', vettore[c]);
}