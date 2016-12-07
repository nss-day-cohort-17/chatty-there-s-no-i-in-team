console.log("Linked!")

// XML Http Request
var msgRequest = new XMLHttpRequest()
msgRequest.addEventListener("load", loadMessages)
msgRequest.open("GET", "messages.json")
msgRequest.send()

// funtion to parse JSON
function loadMessages (e) {
   var presetMsgs = JSON.parse(e.target.responseText)
   console.log(presetMsgs)
}
