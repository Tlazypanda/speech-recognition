window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const synth=window.speechSynthesis;
const recognition = new SpeechRecognition();
const icon=document.querySelector('i.fa.fa-microphone');
let paragraph=document.createElement('p');
let container=document.querySelector('.text-box');

container.appendChild(paragraph);
const sound=document.querySelector('.sound');

icon.addEventListener('click',()=>{
//sound.play();
dictate();
});

const dictate=()=>{
recognition.start();
recognition.onresult=(Event)=>{
const finalText=Event.results[0][0].transcript;
console.log(finalText);
paragraph.textContent=finalText;
	if (Event.results[0].isFinal){
	
	if(finalText.includes('what is the time')){
		speak(getTime);
		
	};
	
	if(finalText.includes('what is the todays date')){
		speak(getDate);
	};
	
	if(finalText.includes('what is the temperature')){
		speak(getTemperature);
	};
		
	if(finalText.includes('Translate')){
		speak(translateSpanish);
	};
	}
}
}

const speak = (action) =>{
	say=new SpeechSynthesisUtterance(action());
	synth.speak(say);
};

const getTime = () => {
  const time = new Date(Date.now());
  return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};

const getDate = () => {
  const time = new Date(Date.now())
  return `today is ${time.toLocaleDateString()}`;
};





