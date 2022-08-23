const hourEl=document.querySelector('.hour')
const minuteEl=document.querySelector('.minute')
const secondEl=document.querySelector('.second')
const timeEl=document.querySelector('.time')
const dateEl=document.querySelector('.date')
const toggleEl=document.querySelector('.toggle')


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

toggleEl.addEventListener('click', (e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'

    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time =new Date();
    const month =time.getMonth()
    const day=time.getDay()
    const date=time.getDate()
    const hours=time.getHours() 
    const hourForClock=hours !=12 ?hours% 12 : 12
    const minutes = time.getMinutes()
    const seconds= time.getSeconds()
    const ampm = hours >=12 ? 'pm' : 'am'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML = `${hourForClock}:${minutes<10?`0${minutes}`:minutes} ${ampm}` 
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle"> ${date}</span>`
}

const scale = (number, inMin, inMax, outMin, outMax) =>{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000)
