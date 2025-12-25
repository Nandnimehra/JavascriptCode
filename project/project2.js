//project 2

const form = document.querySelector('form')
// this uusecase will give you empty

form.addEventListener('submit',function(e){
  e.preventDefault()

const height =parseInt(document.querySelector
    ('#height').value)
const weight =parseInt(document.querySelector
    ('#weight').value);
const results =document.querySelector
    ('#results')

if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML="please give a valid height"
}else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML="please give a valid weight"
} else {
  const bmi =(weight / ((height*height/10000)).toFixed(2))
  // show the results 
  results.innerHTML = `<span>${bmi}</span>`
}
const bmiGuide =document.querySelector('#bmiGuide') 
if(weight <= 18.6){
  results.innerHTML="under weight"

}else if(weight === 18.6 || 24.9){
  results.innerHTML="Normal weight"
}else{
  results.innerHTML="overweight"

}


})

// project 3

const clock =document.getElementById('clock');
//const clock =document.querySelector('#clock')



setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000)