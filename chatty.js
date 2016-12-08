console.log("Linked!")

// XML Http Request
var msgRequest = new XMLHttpRequest()
msgRequest.addEventListener("load", loadMessages)
msgRequest.open("GET", "messages.json")
msgRequest.send()

// funtion to parse JSON

function loadMessages (e) {
   var presetMsgs = JSON.parse(e.target.responseText)
   messages(presetMsgs)
}

//function to populate DOM message content

function messages (presetMsgs) {
  var messageContent = ""

      for (var i = 0; i < presetMsgs.stockMessages.length; i++) {
      messageContent += `
                        <div>
                          <h3 id="msg${i}">${presetMsgs.stockMessages[i].content}</h3>
                        </div>
                        `
    document.getElementById("msgBox").innerHTML = messageContent;
    console.log(messageContent)
  }
}

//Event listener for load event
//event listener still needs 2nd argument and function
  //for keyboard event

// var existingMessages = document.getElementById("msg1");
// existingMessages.addEventListener('load', section);
