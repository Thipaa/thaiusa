document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var formData = new FormData(loginForm);
  
      fetch('/login', {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        return response.text();
      })
      .then(function(result) {
        var messageDiv = document.getElementById('message');
        messageDiv.textContent = result;
  
        if (result === 'Login successful') {
          window.location.href = '/menu.html';
        }
      })
      .catch(function(error) {
        console.error(error);
      });
    });
  });
  