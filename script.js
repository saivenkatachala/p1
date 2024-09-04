let currentPage = 1;
const totalPages = 15;

function nextPage() {
    if (currentPage < totalPages) {
        playSound();
        document.getElementById('page' + currentPage).style.transform = 'rotateY(-180deg)';
        currentPage++;
        document.getElementById('page' + currentPage).style.transform = 'rotateY(0deg)';
    }
}

function prevPage() {
    if (currentPage > 1) {
        playSound();
        document.getElementById('page' + currentPage).style.transform = 'rotateY(-180deg)';
        currentPage--;
        document.getElementById('page' + currentPage).style.transform = 'rotateY(0deg)';
    }
}

function playSound() {
    const audio = new Audio('pg.mp3');
    audio.play();
}

window.onload = function() {
    document.getElementById('page1').style.transform = 'rotateY(0deg)';
};
