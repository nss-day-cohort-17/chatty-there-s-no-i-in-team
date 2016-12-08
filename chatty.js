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
                          <button id=clear${i}>Delete</button>
                        </div>
                        `
    document.getElementById("message_box").innerHTML = messageContent;
    console.log(messageContent)
  }
}

//Event listener for dark theme checkbox
// var darkTheme = document.getElementById("cbox1");
// darkTheme.addEventListener("click", #)

//Event listener for large text checkbox
// var largeText = document.getElementById("cbox2");
// largeText.addEventListener()


//Event listener for load event
//event listener still needs 2nd argument and function
  //for keyboard event


// var existingMessages = document.getElementById("msg1");
// existingMessages.addEventListener('load', section);


//Event listener to display new message when enter key is pressed
document.getElementById("comment").addEventListener('keypress', function(x) {
   if (x.key === "Enter") {
      var newComment = document.getElementById("comment").value
      console.log("new Comment", newComment)
      document.getElementById("message_box").innerHTML += `
               <div>
                  <h3>${newComment}</h3>
                  <button>Delete</button>
               </div>
               `
      document.getElementById("comment").value = ""
   }
})

// funtion and event listener for "Clear all messages" button


var clearAll = document.getElementById("clear", )
