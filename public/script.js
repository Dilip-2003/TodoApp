const toggleCheckbox = document.getElementById('toggleCheckbox');
const textToToggle = document.getElementById('textToToggle');

toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    textToToggle.classList.add('line-through');
  } else {
    textToToggle.classList.remove('line-through');
  }
});
