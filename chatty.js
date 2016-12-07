console.log("Linked!")

// XML Http Request
var msgRequest = new XMLHttpRequest()
msgRequest.addEventListener("load", loadMessages)
msgRequest.open("GET", "messages.json")
msgRequest.send()
<<<<<<< HEAD
=======

// funtion to parse JSON
function loadMessages (e) {
   var presetMsgs = JSON.parse(e.target.responseText)
   console.log(presetMsgs)
}
>>>>>>> 5cea305cf641eeb597afad10f3c6e5226f18a589
