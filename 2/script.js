document.getElementById('yesBtn').addEventListener('click', function() {
  document.body.innerHTML = '<div class="container"><div id="result">Yeeeyyyy!! mwuahh 😘😘</div><img src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Cute animated illustration"></div>';
});

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', function() {
  // Change position
  noBtn.style.position = 'absolute';
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

noBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent button click event from bubbling up
});

document.addEventListener('click', function() {
  // Make the button non-clickable if clicked outside the button
  noBtn.disabled = true;
});
