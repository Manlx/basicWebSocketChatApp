/** @type {HTMLInputElement} */
const input = document.getElementById("msgInput")
/** @type {HTMLButtonElement} */
const btnsend = document.getElementById("btnsend")
/** @type {HTMLAreaElement} */
const displayMessage = document.getElementById("displayMessage")
/** @type {HTMLDivElement} */
const isConnected = document.getElementById("isConnected")

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  isConnected.style.backgroundColor = "green";3.
});

// Listen for messages
socket.addEventListener("message",
  /** @type {} */ (event) => {
  displayMessage.textContent = `${displayMessage.textContent}\nGuest: ${event.data}`
});

btnsend.addEventListener("click",()=>{
  socket.send(input.value);
  displayMessage.textContent = `${displayMessage.textContent}\nYou: ${input.value}`

  input.value = ""
})