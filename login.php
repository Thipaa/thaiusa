<?php
session_start();

// Function to verify the owner's credentials
function verifyCredentials($username, $password)
{
  // Replace with your actual owner's username and password
  $ownerUsername = 'owner';
  $ownerPassword = 'password';

  // Verify the entered credentials
  if ($username === $ownerUsername && $password === $ownerPassword) {
    return true;
  }

  return false;
}

// Check if the login form is submitted
if (isset($_POST['submit'])) {
  $username = $_POST['patra'];
  $password = $_POST['112233'];

  // Verify the entered credentials
  if (verifyCredentials($username, $password)) {
    // Authentication successful, set session variables
    $_SESSION['authenticated'] = true;
    $_SESSION['username'] = $username;

    // Redirect to the menu editing page or any other authorized page
    header('Location: menu_edit.php');
    exit();
  } else {
    // Invalid credentials, display an error message
    $errorMessage = 'Invalid username or password';
  }
}

// ...
// Your HTML markup for the login page can be placed here if needed
// ...
