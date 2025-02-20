// emoji.js

document.addEventListener('DOMContentLoaded', function () {
    var emojiContainer = document.getElementById('emojiContainer');
    var emojis = ['❤️', '😎', '🤔', '😃', '☕️', '😭', '💻', '👻'];
    var currentIndex = 0;

    function changeEmoji() {
        // % emojis.length makes sure that if the index reaches the end of the array, it loops back to the beginning.  
        // 8 % 8 = 0 → The index resets to 0, showing the first emoji again.
        emojiContainer.innerHTML = emojis[currentIndex];
        currentIndex = (currentIndex + 1) % emojis.length;
    }

    setInterval(changeEmoji, 700); // Change the emoji every 3 seconds (adjust the interval as needed)
});