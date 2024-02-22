function play()
{
    const startGame = document.getElementById('play-on')
    startGame.classList.add('hidden')
    const playingGame = document.getElementById('playing')
    playingGame.classList.remove('hidden')
    getRandomAlphabet()
}
function getRandomAlphabet ()
{
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz' 
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    const newElement = document.getElementById('current-element')
    newElement.innerText = alphabet;

    const bgColor = document.getElementById(alphabet)
    bgColor.classList.add('bg-[#FFA500]');
}

