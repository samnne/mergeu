document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file_input");
  const form = document.querySelector("form");
  const span = document.getElementById("file_text");
  fileInput.addEventListener("change", function () {
    if (this.files.length > 0) {
      span.textContent = `${this.files[0].name.substring(0, 5)}...+ ${this.files.length - 1} more`;
    } else {
      span.textContent = "Select your PDF's";
    }
    if (this.files.length >= 2) {
      form.querySelector("button").disabled = false;
      form.querySelector("button").classList.add("is-primary");
      form.querySelector("button").classList.remove("is-disabled");
    } else {
      form.querySelector("button").disabled = true;
      form.querySelector("button").classList.add("is-disabled");
      form.querySelector("button").classList.remove("is-primary");
    }
  });
});
