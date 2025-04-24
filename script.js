document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input').value;
  if (email) {
    alert(`Thanks for signing up, ${email}!`);
    this.reset();
  }
});
