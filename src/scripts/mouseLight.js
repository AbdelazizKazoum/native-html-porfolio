export default function initMouseLight() {
  // Create the light element
  const light = document.createElement("div");
  light.className = "mouse-light";
  document.body.appendChild(light);

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Update light position (center the light at cursor)
    light.style.left = x + "px";
    light.style.top = y + "px";
  });

  // Hide light when mouse leaves window
  document.addEventListener("mouseleave", () => {
    light.style.opacity = "0";
  });

  // Show light when mouse enters window
  document.addEventListener("mouseenter", () => {
    light.style.opacity = "1";
  });
}
