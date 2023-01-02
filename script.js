// API
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
//Result
const result = document.getElementById('result');
//Sound
const sound = document.getElementById('sound');
//Search button
const btn = document.getElementById('search-btn');
//Adding fn to button
btn.addEventListener('click', () => {
    let inpWord = document.getElementById('inp-word').value; //.value is used to show the content
    // console.log(inpWord);
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML =
                `<div class="word">
             <h3>${inpWord}</h3>
             <button onclick="playSound()" >
                 <i class="uil uil-volume"></i>
             </button>
         </div>
         <!-- Grammar -->
         <div class="details">
             <p>${data[0].meanings[0].partOfSpeech}</p>
             <p>/${data[0].phonetic}/</p>
         </div>
         <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition} 
         </p>
         <p class="word-example">
            ${data[0].meanings[1].definitions[0].example || ""}

         </p>`;
         sound.setAttribute("src",`${data[0].phonetics[1].audio}`);
            //  console.log(sound);

        })
        .catch( () => {
            result.innerHTML = `<h3 class="error" >Could'nt find the word or check the spelling</h3>`
        })
});
function playSound(){
    sound.play();
}

