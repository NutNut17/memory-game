// Map letter (A, B, C...) to an index number
function letterToNumber(letter) {
    const normalized = letter.trim().toUpperCase();
    return normalized.charCodeAt(0) - 'A'.charCodeAt(0);
}

// Generate a random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Start a countdown timer
function startTimer(seconds, display) {
    let timer = seconds;
    const interval = setInterval(() => {
        display.textContent = `Time left: ${timer}s`;
        timer--;
        if (timer < 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            toggleGrid(false);
        }
    }, 1000);
}

// Show or hide the grid
function toggleGrid(show) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.style.display = show ? 'block' : 'none';
}

// Main function to generate the grid
function generateGrid() {
    const char1 = document.getElementById('characterInput1').value;
    const char2 = document.getElementById('characterInput2').value;
    const gridSizeInput = document.getElementById('gridSize').value;

    if (!char1 || !char2 || !gridSizeInput) {
        alert('Please fill in all fields.');
        return;
    }

    const minLetter = letterToNumber(char1);
    const maxLetter = letterToNumber(char2);

    if (isNaN(minLetter) || isNaN(maxLetter)) {
        alert('Invalid letters. Use A-Z only.');
        return;
    }

    const min = Math.min(minLetter, maxLetter);
    const max = Math.max(minLetter, maxLetter);
    const gridSize = parseInt(gridSizeInput, 10);

    if (gridSize <= 0) {
        alert('Grid size must be a positive number.');
        return;
    }

    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';

    const container = document.createElement('div');
    container.className = `row row-cols-${gridSize} g-2`;

    const images = [
        '../img2/letter-a.png',
        '../img2/letter-b.png',
        '../img2/letter-c.png',
        '../img2/letter-d.png',
        '../img2/letter-e.png',
        '../img2/letter-f.png',
        '../img2/letter-g.png',
        '../img2/letter-h.png',
        '../img2/letter-i.png',
        '../img2/letter-j.png',
        '../img2/letter-k.png',
        '../img2/letter-l.png',
        '../img2/letter-m.png',
        '../img2/letter-n.png',
        '../img2/letter-o.png',
        '../img2/letter-p.png',
        '../img2/letter-q.png',
        '../img2/letter-r.png',
        '../img2/letter-s.png',
        '../img2/letter-t.png',
        '../img2/letter-u.png',
        '../img2/letter-v.png',
        '../img2/letter-w.png',
        '../img2/letter-x.png',
        '../img2/letter-y.png',
        '../img2/letter-z.png',
    ];

    for (let i = 0; i < gridSize * gridSize; i++) {
        const randomIndex = randomInt(min, max);

        // Guard against index out of bounds
        if (randomIndex < 0 || randomIndex >= images.length) {
            console.warn(`Skipping invalid random index: ${randomIndex}`);
            continue;
        }

        const selectedImage = images[randomIndex];

        const gridItem = document.createElement('div');
        gridItem.className = 'col';

        const imgElement = document.createElement('img');
        imgElement.src = selectedImage;
        imgElement.alt = `Image ${randomIndex}`;
        imgElement.className = 'square-img';

        gridItem.appendChild(imgElement);
        container.appendChild(gridItem);
    }

    gridContainer.appendChild(container);

    document.getElementById('toggleButton').style.display = 'block';
    toggleGrid(true);

    const display = document.getElementById('timer');
    startTimer(10, display);
}

// Event listeners
document.getElementById('generateButton').addEventListener('click', generateGrid);
document.getElementById('toggleButton').addEventListener('click', () => {
    const container = document.getElementById('gridContainer');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
});
