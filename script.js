// === REGISTRATION FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#registration form");
    const submitButton = form.querySelector("button[type='submit']");
    const alertBox = document.getElementById("registration-alert");
  
    submitButton.addEventListener("click", function (e) {
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
  
      e.preventDefault();
  
      // Show notification
      alertBox.classList.remove("d-none");
  
      // Hide after 3 seconds
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 3000);
  
      form.reset();
      form.classList.remove('was-validated');
    });
  });
  
// === SEARCH FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = searchForm.querySelector('input[type="search"]');
  
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const query = searchInput.value.toLowerCase().trim();
      if (!query) return;
  
      const sections = document.querySelectorAll("section");
      let matchFound = false;
  
      sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        if (!matchFound && content.includes(query)) {
          section.scrollIntoView({ behavior: "smooth" });
          section.classList.add("highlight-section");
          matchFound = true;
  
          // Remove highlight after 2 seconds
          setTimeout(() => section.classList.remove("highlight-section"), 2000);
        }
      });
  
      if (!matchFound) {
        alert("No matching section found. Please try another keyword.");
      }
  
      searchInput.value = "";
    });
  });
  
  