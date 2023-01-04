function broadCast() {
    var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    $("#sendbtn").disabled = true;
    connection.on("ReceiveMessage", function (user, message) {
        $("#messageList").append('<li>' + user + '=>' + message + '</li >')
    });

    connection.start().then(function () {
        $("#sendbtn").disabled = false;
    }).catch(function (err) {
        return console.error(err.toString());
    });

    $("#sendbtn").on('click', function (event) {
        var sender = $("#userInput").val();
        var message = $("#messageInput").val();
        connection.invoke("SendMessage", sender, message).catch(function (err) {
            return console.error(err.toString());

        });
        $("#messageInput").val(" ");
        event.preventDefault();
    });
}


