const toggleButton = document.querySelector('.dark-mode-toggle');
const bodyElement = document.querySelector('body'); // Updated to target body

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode'); // Toggle on body
  
  // Optional: Save preference with Local Storage
  const isDarkMode = bodyElement.classList.contains('dark-mode');
  localStorage.setItem('darkmodeEnabled', isDarkMode);
});

// Optional: Load Saved Preference on Page Load 
const darkModeStored = localStorage.getItem('darkmodeEnabled'); 

if (darkModeStored === 'true') {
  bodyElement.classList.add('dark-mode'); 
}
