// ========= DROPDOWN AUTO HOVER MAGE FULL MENU =========
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    const dropdownMega = document.querySelector(".dropdownMega");
    const megaMenu = document.querySelector(".dropdownMegaMenu");
    const megaContent = document.querySelector(".megaContent");

    let timeout;
    dropdownMega.addEventListener("mouseenter", function () {
      clearTimeout(timeout);
      megaMenu.classList.add("show");
    });
    dropdownMega.addEventListener("mouseleave", function () {
      timeout = setTimeout(() => {
        megaMenu.classList.remove("show");
      }, 120);
    });
    megaContent.addEventListener("mouseenter", function () {
      clearTimeout(timeout);
    });
    megaContent.addEventListener("mouseleave", function () {
      megaMenu.classList.remove("show");
    });
  }
});

// ========= DROPDOWN AUTO HOVER *PC LANG =========
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
      let hideTimeout;

      dropdown.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);
        const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
        bootstrap.Dropdown.getOrCreateInstance(toggle).show();
      });

      dropdown.addEventListener("mouseleave", function () {
        const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);

        hideTimeout = setTimeout(() => {
          instance.hide();
        }, 120);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menuToggle");
  const navbarMenu = document.querySelector(".navbarMenuMainLayout");

  toggleBtn.addEventListener("click", function () {
    toggleBtn.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });
});
