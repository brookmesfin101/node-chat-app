var socket = io();

socket.on('connect', function () {
    console.log("Connected to server");
});

socket.on("join", function () {
    console.log("Welcome to chat app");
})

// socket.emit("createMessage", {
//     to: "mesfin@example.com",
//     text: "Do your homework"
// });

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

socket.on("newMessage", function (message){
    console.log("New Message", message);
});