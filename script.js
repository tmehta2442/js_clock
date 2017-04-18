const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90; //adding 90 to offset the 90 degree shift in css for styling
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	
	const mins = now.getMinutes();
	const minutesDegrees = ((mins / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`

	if (secondHand.style.transform == 'rotate(444deg)') {
		secondHand.style.transition = 0;
	}

}

setInterval(setDate, 1000);