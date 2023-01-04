function groupChat() {
    var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    $("#sendGroupBtn").disabled = true;
    connection.on("ReceiveMessage", function (user, message) {
        $("#messageGroupList").append('<li>' + user + ':' + message + '</li >');
    });


    connection.start().then(function () {
        $("sendGroupBtn").disabled = false;
    }).catch(function (err) {
        return console.error(err.toString());
    });

    $("#createGroupbtn").on('click', function (event) {
        var group = $("#groupNametxt").val();
        connection.invoke("AddToGroup", group).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();

    });
    $("#sendGroupBtn").on('click', function (event) {
        var user = $("#senderGroupInput").val();
        var message = $("#messageGroupInput").val();
        var group = $("#groupNametxt").val();
        connection.invoke("SendMessageToGroup", group, user, message).catch(function (err) {
            return console.error(err.toString());
        });
        $("#messageGroupInput").val(" ");
        event.preventDefault();
    });
}
