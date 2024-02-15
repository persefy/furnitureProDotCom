//furniturebyroom
document.addEventListener('DOMContentLoaded', function() {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');


    const roomButtons = document.querySelectorAll('.room-button');
    function redirectToRoom(roomName) {
        window.location.href = roomName + '.html';
    }
    roomButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const roomName = this.getAttribute('data-room');
            redirectToRoom(roomName);
        });
    });

    
    first.addEventListener('click', function(event) {
        if (event.target.classList.contains('action')) {
            event.preventDefault();
            event.stopPropagation();
            redirectToRoom('living_room');
        } else {
            first.classList.toggle('show-description');
        }
    });
    second.addEventListener('click', function(event) {
        if (event.target.classList.contains('action')) {
            event.preventDefault();
            event.stopPropagation();
            redirectToRoom('kitchen');
        } else {
            second.classList.toggle('show-description');
        }
    });
    third.addEventListener('click', function(event) {
        if (event.target.classList.contains('action')) {
            event.preventDefault();
            event.stopPropagation();
            redirectToRoom('bedroom');
        } else {
            third.classList.toggle('show-description');
        }
    });
    fourth.addEventListener('click', function(event) {
        if (event.target.classList.contains('action')) {
            event.preventDefault();
            event.stopPropagation();
            redirectToRoom('study_room');
        } else {
            fourth.classList.toggle('show-description');
        }
    });
    fifth.addEventListener('click', function(event) {
        if (event.target.classList.contains('action')) {
            event.preventDefault();
            event.stopPropagation();
            redirectToRoom('outdoor');
        } else {
            fifth.classList.toggle('show-description');
        }
    });
});
