console.log("Linked!")

// XML Http Request
var msgRequest = new XMLHttpRequest()
msgRequest.addEventListener("load", loadMessages)
msgRequest.open("GET", "messages.json")
msgRequest.send()

// funtion to parse JSON
var presetMsgs
function loadMessages (e) {
   presetMsgs = JSON.parse(e.target.responseText)
   console.log(presetMsgs)
}

//function to populate DOM message content
var messageContent
for (var i = 0; i < presetMsgs.stockMessages.length; i++) {
  messageContent += `
                    <<div>
                        <h3 id="msg${i}">${data.stockMessages[i].content}</h3>
                    </div>
                    `
console.log(messageContent)
}

//Event listener for load event
