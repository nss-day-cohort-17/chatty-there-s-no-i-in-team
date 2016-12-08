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

function messages (messageContent) {
for (var i = 0; i < presetMsgs.stockMessages.length; i++) {
  messageContent += `
                    <<div>
                        <h3 id="msg${i}">${data.stockMessages[i].content}</h3>
                    </div>
                    `
console.log(messageContent)
  }
}

//Event listener for load event
//event listener still needs 2nd argument and function
  //for keyboard event

var existingMessages = document.getElementById("msg1");
existingMessages.addEventListener('');

//Event listener to display new message when enter key is pressed
document.getElementById("comment").addEventListener('keypress', function(x) {
   if (x.key === "Enter") {
      var newComment = document.getElementById("comment")
      console.log("new Comment", newComment)
      document.getElementById("msgBox").innerHTML = `
               <div>
                  <h3>document.getElementById("comment")</h3>
               </div>
               `
      document.getElementById("comment") = ""
   }
})

// funtion and event listener for "Clear all messages" button
