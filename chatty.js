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
    // console.log(messageContent)
  }
}

//Event listener for load event
//event listener still needs 2nd argument and function
  //for keyboard event

// var existingMessages = document.getElementById("msg1");
// existingMessages.addEventListener('load', section);

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

// function and event listener for "Clear all messages" button

// FUNCTION TO CHANGE TO DARK THEME IF CHECKBOX IS CHECKED:

 // var darktheme = document.querySelector("#darktheme_checkbox");
 //  darktheme.addEventListener("click", function() {

// eventlistener on the checkbox change
document.querySelector("#darktheme_checkbox").addEventListener("change", function (checkEvt) {
  if (checkEvt.target.checked === true) {
    console.log("you checked the darktheme checkbox")
    // when the checkbox is checked add the darktheme class to the body
    document.body.className = "darktheme"
  }
    // var body = document.body
    // body.className = "darktheme"
    // console.log(body)

  else {
    console.log("darktheme box is unchecked")
    document.body.className = ""
    // when the checkbox is not checked remove the darktheme class from the body
  }
})

// FUNCTION TO CHANGE TO LARGE TEXT IF CHECKBOX IS CHECKED:

document.querySelector("#largetext_checkbox").addEventListener("change", function (checkEvt) {
  if (checkEvt.target.checked === true) {
    console.log("you checked the largetext checkbox")
    document.body.className = "largetext"

    if (document.body.className === "darktheme") {
      document.body.className = "largetext"
    }

// DARK + LARGE = DARK ONLY THEN LARGE ONLY
// LARGE + DARK = LARGE ONLY THEN DARK ONLY


    // console.log("you checked the largetext checkbox")
    // console.log(document.body.className)
    // document.body.className = "largetext"
    // console.log(document.body.className)

  }
  else {
    console.log("largetext box is unchecked")
    document.body.className = ""
    // when the checkbox is not checked remove the darktheme class from the body
  }
})

  // SAMPLE CODE FROM TREE EXERCISE:
  // var inputField1 = document.querySelector('#CharacterInput');
  // inputField1.addEventListener("keypress", function(kbEvt) {
  //   if (kbEvt.code === 'Enter') {
  //     if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
  //       var myObject = {
  //       "character": document.getElementById("CharacterInput").value,
  //       "height":  document.getElementById("HeightInput").value
  //       }
  //       tree(myObject)
  //     }
  //     else {
  //       alert("Oops! Both fields must have a value!")
  //     }
  //   }
  // });

  // if (evt.target.checked)
  // if (document.querySelector("#darktheme_checkbox").checked)
