// console.log("Linked!")

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
                          <h3>${presetMsgs.stockMessages[i].content}</h3>
                            <button>Delete</button>
                        </div>
                        `
    document.getElementById("message_box").innerHTML = messageContent;
    // console.log(messageContent)
  }
}

//Event listener for dark theme checkbox
// var darkTheme = document.getElementById("cbox1");
// darkTheme.addEventListener("click", #)

//Event listener for large text checkbox
// var largeText = document.getElementById("cbox2");
// largeText.addEventListener()


//Event listener to display new message when enter key is pressed
document.getElementById("comment").addEventListener('keypress', function(x) {
   if (x.key === "Enter") {
      var newComment = document.getElementById("comment").value
      // console.log("new Comment", newComment)
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
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = " ";
})

//function and listener for individual message delete buttons
document.querySelector("section").addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "button") {
      event.target.parentElement.remove()
    }
})

// function and event listener for "Clear all messages" button



// FUNCTION TO CHANGE TO DARKTHEME IF CHECKBOX IS CHECKED
// AND TOGGLE BACK AND FORTH BETWEEN CHECKED AND UNCHECKED:

document.querySelector("#darktheme_checkbox").addEventListener("change", function (checkEvt) {
  if (checkEvt.target.checked === true) {
    // console.log("you checked the darktheme checkbox")
    document.body.classList.add("darktheme")
  }

  else {
    // console.log("darktheme box is unchecked")
    document.body.classList.toggle("darktheme")
  }
})

// FUNCTION TO CHANGE TO LARGETEXT IF CHECKBOX IS CHECKED
// AND TOGGLE BACK AND FORTH BETWEEN CHECKED AND UNCHECKED:

  document.querySelector("#largetext_checkbox").addEventListener("change", function (checkEvt) {
    if (checkEvt.target.checked === true) {
      // console.log("you checked the largetext checkbox")
      document.body.classList.add("largetext")
    }

    else {
      // console.log("largetext box is unchecked")
      document.body.classList.toggle("largetext")
    }
})
