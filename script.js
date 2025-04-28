function startTimer(duration, display) {
    let timer = duration, seconds;

    const interval = setInterval(() => {
        seconds = parseInt(timer, 10);

        display.textContent = `Time left: ${seconds}s`;

        if (--timer < 0) {
            clearInterval(interval);
            toggleGrid(false);
        }
    }, 1000);
}

function generateGrid() {

    const gridSize = document.getElementById('gridSize').value;
    const gridContainer = document.getElementById('gridContainer');
    const char1 = document.getElementById('characterInput1').value;
    const char2 = document.getElementById('characterInput2').value;
    const max = letterToNumber(char2);
    const min = letterToNumber(char1);

    gridContainer.innerHTML = ''; // Clear previous grid

    const container = document.createElement('div');
    container.className = `row row-cols-${gridSize}`;

    const images = [
        'img2/letter-a.png',
        'img2/letter-b.png',
        'img2/letter-c.png',
        'img2/letter-d.png',
        'img2/letter-e.png',
        'img2/letter-f.png',
        'img2/letter-g.png',
        'img2/letter-h.png',
        'img2/letter-i.png',
        'img2/letter-j.png',
        'img2/letter-k.png',
        'img2/letter-l.png',
        'img2/letter-m.png',
        'img2/letter-n.png',
        'img2/letter-o.png',
        'img2/letter-p.png',
        'img2/letter-q.png',
        'img2/letter-r.png',
        'img2/letter-s.png',
        'img2/letter-t.png',
        'img2/letter-u.png',
        'img2/letter-v.png',
        'img2/letter-w.png',
        'img2/letter-x.png',
        'img2/letter-y.png',
        'img2/letter-z.png',
    ];

    for (let i = 0; i < gridSize * gridSize; i++) {
        
        const randomIndex = randomInt(min, max);
        const selectedImage = images[randomIndex];

        // Create a div with Bootstrap column class
        const gridItem = document.createElement('div');
        gridItem.className = 'col';
        
        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = selectedImage;
        imgElement.className = 'square-img'; // Use square image styling

        gridItem.appendChild(imgElement)
        container.appendChild(gridItem);
    }

    gridContainer.appendChild(container);

    // Display grid and show/hide button after 10 seconds
    document.getElementById('toggleButton').style.display = 'block';
    toggleGrid(true);  // Show grid initially
    
    const display = document.getElementById('timer');
    startTimer(10, display);  // Start the 10-second timer
}

let gridVisible = true;

function toggleGrid() {

    const gridContainer = document.getElementById('gridContainer');

    if (gridVisible) {
        gridContainer.classList.remove('hidden');
        gridContainer.classList.add('visible');
        gridVisible = false;
    } else {
        gridContainer.classList.remove('visible');
        gridContainer.classList.add('hidden');
        gridVisible = true;
    }
    
    document.getElementById('toggleButton').textContent = gridVisible ? 'Show Grid' : 'Hide Grid';
}

function letterToNumber(letter) {
    // Ensure the letter is lowercase to handle both uppercase and lowercase inputs
    letter = letter.toLowerCase();
  
    // Check if the letter is between 'a' and 'z'
    if (letter >= 'a' && letter <= 'z') {
      // Convert the letter to a number using ASCII code
      return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else {
      return null; // Return null or an error for non-alphabet characters
    }
  }

function randomInt(min, max) {
    console.log(min, max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
return Math.floor(Math.random() * (max - min + 1)) + min - 1;
}

toggleGrid(true);  // Show grid initially