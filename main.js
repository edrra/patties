function openMap() {
  // Coordinates for Christchurch Park, Ipswich
  const lat = 52.0660919;
  const lng = 1.158688;

  // Construct the Google Maps URL with a pin at these coordinates
  const url = `https://www.google.com/maps?q=${lat},${lng}&hl=en`;

  // Open in a new tab
  window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
