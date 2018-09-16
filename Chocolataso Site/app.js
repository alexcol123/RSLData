var xy = document.getElementById('myAudio');

function playAudio() {
  xy.play();
}

function pauseAudio() {
  xy.pause();
}

let myAudio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let btnPlayChocolatazos = document.getElementById('playChocolatazosBtn');

btnPlayChocolatazos.addEventListener('click', playFunc);

let resultsAqui = document.getElementById('aqui');

function playFunc(e) {
  e.preventDefault(e);

  let x = 1;
  let output = '';

  myAudio.forEach(element => {
    output += `



    <li class="list-group-item bg-danger text-center pb-3 mb-1">
    <h3 class="p-2 bg-dark">Chocolatazo #${x}</h3 > 
    <br>

    <audio class="mx-auto" id="myAudio" controls="true">

      <source src="chocolatazos/${x}.mp3" type="audio/mp3">

    </audio>

  </li>



   `;
    return x++;
  });
  console.log(output);

  resultsAqui.innerHTML = output;
}
