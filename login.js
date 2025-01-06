document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginBtn').addEventListener('click', openModal);
});

function openModal() {
  console.log('Hello');
  document.getElementById('loginModal').style.display = 'block';
}

// Rest of your existing login.js code

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    alert('Login successful!');
    closeModal();
  } else if (username === 'rimsha' && password === 'admin') {
    alert('Login successful!');
    closeModal();
  } else if (username === 'roman' && password === 'admin') {
    alert('Login successful!');
    closeModal();
  } else if (username === 'urwa' && password === 'admin') {
    alert('Login successful!');
    closeModal();
  } else {
    alert('Invalid credentials');
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == document.getElementById('loginModal')) {
    closeModal();
  }
};
