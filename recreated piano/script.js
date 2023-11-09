const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keyscheckBox = document.querySelector('.volume-keys_checkbox input');
 let allKeys=[],
  audio = new Audio ('notes/notes/a.mp3');

const playNotes = (key) => {
     audio.src = `notes/notes/${key}.mp3`;
     audio.play();
    //  console.log(allKeys);

     const clickedKeys = document.querySelector(`[data-note= '${key}']`);
     clickedKeys.classList.add('active');
     setTimeout(() => {
        clickedKeys.classList.remove('active');//removing active after 150mm
     }, 150);

}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.note);//adding data set to the allkeys array
    // calling playnotes function with dataset as an argument
    key.addEventListener('click', () => {
        playNotes(key.dataset.note);
    })
})
const handleVolume = (e) => {
    audio.volume = e.target.value; //passing the range slider as an audio volume
}
const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

// playing with the keyboard
const pressedKey = (e) => {
    //if the played key is in the allkeys array, only call the playtune function 
   if(allKeys.includes(e.key))  playNotes(e.key);
}
keyscheckBox.addEventListener('click',showHideKeys);
volumeSlider.addEventListener('input',handleVolume);
document.addEventListener('keydown', pressedKey);