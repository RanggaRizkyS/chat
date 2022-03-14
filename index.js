var firebaseConfig = {
  apiKey: "AIzaSyBAVPRW-454ZiZV55PKz47CrXgcHU8k-rI",
  authDomain: "justfirst-d5b27.firebaseapp.com",
  databaseURL: "https://justfirst-d5b27-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justfirst-d5b27",
  storageBucket: "justfirst-d5b27.appspot.com",
  messagingSenderId: "980198791588",
  appId: "1:980198791588:web:9bd2e1b0eebac0c79f8931"
};
firebase.initializeApp(firebaseConfig);
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});