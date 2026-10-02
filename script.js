function filterProjects(category) {

  let cards = document.querySelectorAll('.project-card');
  let buttons = document.querySelectorAll('.filter-btn');


  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');


  cards.forEach(card => {
    let cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block'; // Show card
    } else {
      card.style.display = 'none';  // Hide card
    }
  });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {

  e.preventDefault();


  let name = document.getElementById('userName').value.trim();
  let email = document.getElementById('userEmail').value.trim();
  let message = document.getElementById('userMessage').value.trim();


  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let messageError = document.getElementById('messageError');
  let successMsg = document.getElementById('successMsg');


  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;


  if (name === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }


  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email address is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }


  if (message === "") {
    messageError.textContent = "Message field cannot be blank.";
    isValid = false;
  }


  if (isValid) {
    successMsg.textContent = "Thank you! Your message has been validated and sent.";
    document.getElementById('contactForm').reset();
  }
});// 1. Live Time
function showTime() {
  let now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(showTime, 1000);

// 2. Interactive Star Rating Function
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('#star-rating span');
  const message = document.getElementById('rating-message');

  if (!stars.length) return;

  stars.forEach((star, index) => {
    
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        if (i <= index) s.classList.add('hover');
        else s.classList.remove('hover');
      });
    });

  
    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });

  
    star.addEventListener('click', () => {
      const selectedRating = index + 1;

      stars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });

      message.textContent = `Thank you for the ${selectedRating}-star rating! 🙌`;
    });
  });
});