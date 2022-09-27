const container = document.getElementById("con1");
const thanksContainer = document.getElementById("con2");
const stars = document.querySelectorAll(".star");
const submitBtn = document.getElementById("submit");
const select = document.getElementById("selectQ");

// Selecting all the input buttons
stars.forEach((inputs) => {
  // Adding click event listener to every input buttons
  inputs.addEventListener("click", () => {
    // Checking if user have click to button or not
    if (inputs.value === null) {
      return;
    } else {
      // Enabling submit button which is disabled
      submitBtn.disabled = false;

      // Adding click event listener to submit button
      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Enabling thanks container
        thanksContainer.style.display = "flex";
        select.innerHTML = `You selected ${inputs.value} out of 5`;

        // Replacing main container with thanks container
        container.replaceWith(thanksContainer);
      });
    }
  });
});
