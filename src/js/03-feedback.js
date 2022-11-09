import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const messageRef = document.querySelector('textarea')
const emailRef = document.querySelector('[type="email"]');


const LOCAL_STORAGE_KEY = "feedback-form-state";
formRef.addEventListener('input', throttle(onInput, 500))
formRef.addEventListener('submit', onSubmit)

const formInf = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};



function onInput(event) {
	formInf[event.target.name] = event.target.value;
    const formInfoJson = JSON.stringify(formInf);
    localStorage.setItem(LOCAL_STORAGE_KEY, formInfoJson);
}
function savedFormValues(values) {
	messageRef.value = values.messageRef || "";
	emailRef.value = values.emailRef || "";
}
savedFormValues(formInf);


function onSubmit(event) {
	event.preventDefault();

	event.currentTarget.reset();

	

	console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
