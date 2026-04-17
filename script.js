const chordsInfo = {
    'E Major': 'Prsty: 022100 - Základní kámen úvodního riffu.',
    'A Major': 'Prsty: X02220 - Použij pro přechod do refrénu.',
    'B Major': 'Prsty: X24442 - Pozor na čistý stisk všech strun!',
    'C# Minor': 'Prsty: X46654 - Emotivní část bridge.'
};

function showChord(chordName) {
    const display = document.getElementById('chord-display');
    display.style.opacity = 0;
    
    setTimeout(() => {
        display.innerHTML = `<strong>${chordName}:</strong> ${chordsInfo[chordName]}`;
        display.style.opacity = 1;
    }, 200);
}