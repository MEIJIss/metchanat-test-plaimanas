document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formContentMainLayout");
  const sendBtn = form.querySelector("button");

  sendBtn.addEventListener("click", () => {
    clearErrors();

    let hasError = false;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("Email");
    const phone = document.getElementById("PhoneNumber");
    phone.addEventListener("input", () => {
      phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
    });
    const subject = document.getElementById("Subject");

    const workTypeRadios = document.querySelectorAll('input[name="workType"]');
    const workTypeGroup = document.getElementById("workTypeGroup");

    const checkbox = document.getElementById("termsCheckbox");
    const checkboxGroup = document.getElementById("termsGroup");

    if (!fullname.value.trim()) {
      showError(fullname, "Please enter your full name");
      hasError = true;
    }

    if (!email.value.trim()) {
      showError(email, "Please enter your email");
      hasError = true;
    } else if (!validateEmail(email.value)) {
      showError(email, "Invalid email format");
      hasError = true;
    }

    if (!phone.value.trim()) {
      showError(phone, "Please enter phone number");
      hasError = true;
    } else if (!validatePhone(phone.value)) {
      showError(phone, "Phone number must be 10 digits");
      hasError = true;
    }

    if (!subject.value) {
      showError(subject, "Please select a subject");
      hasError = true;
    }

    const isWorkTypeSelected = [...workTypeRadios].some((r) => r.checked);
    if (!isWorkTypeSelected) {
      workTypeGroup.classList.add("error");
      hasError = true;
    }

    if (!checkbox.checked) {
      checkboxGroup.classList.add("error");
      hasError = true;
    }

    if (hasError) return;

    Swal.fire({
      title: "Confirm submission",
      text: "Do you want to send this inquiry?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "SEND",
      cancelButtonText: "CANCEL",
      reverseButtons: true,
    }).then((result) => {
      if (!result.isConfirmed) return;

      Swal.fire({
        icon: "success",
        title: "Sent successfully",
        text: "We received your inquiry.",
        confirmButtonText: "OK",
      });
      form.reset();
      document.querySelectorAll(".input-group").forEach((g) => {
        g.classList.remove("error");
      });
      workTypeGroup.classList.remove("error");
      checkboxGroup.classList.remove("error");
    });
  });

  function showError(input, message) {
    const group = input.closest(".input-group");
    group.classList.add("error");
    group.querySelector(".errorMsg").textContent = message;
  }

  function clearErrors() {
    document
      .querySelectorAll(".input-group")
      .forEach((g) => g.classList.remove("error"));
    document
      .querySelectorAll(".radioGroup")
      .forEach((g) => g.classList.remove("error"));
    document
      .querySelectorAll(".checkboxOption")
      .forEach((g) => g.classList.remove("error"));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validatePhone(phone) {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 10;
  }

  document.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("input", () => {
      el.closest(".input-group")?.classList.remove("error");
    });
  });

  document.querySelectorAll('input[name="workType"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      document.getElementById("workTypeGroup").classList.remove("error");
    });
  });

  document.getElementById("termsCheckbox").addEventListener("change", () => {
    document.getElementById("termsGroup").classList.remove("error");
  });
});
