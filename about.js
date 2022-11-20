console.log("hello world");



function handleSubmit(evt) {
evt.preventDefault();
	
console.log('form submit');
alert('The form has been submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function favImage() {

    alert('You are awesome!');
  }

