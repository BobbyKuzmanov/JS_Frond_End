function encodeAndDecodeMessages() {
    const [encodeArea, decodeArea] = document.querySelectorAll("textarea")
    const [encodeBtn, decodeBtn] = document.querySelectorAll("button")

    encodeBtn.addEventListener("click", encodeMsg)
    decodeBtn.addEventListener("click", decodeMsg)

    function handleEncoding(message, encode = true) {
        let step = 1

        if (!encode) {
            step = -1
        }

        const result = []
        for (let i = 0; i < message.length; i++) {
            let newSymbol = message[i].charCodeAt(0) + step
            result.push(String.fromCharCode(newSymbol))
        }
        return result.join("")
    }
    
    function encodeMsg() {
        let message = encodeArea.value
        encodeArea.value = ""

        decodeArea.value = handleEncoding(message)
    }

    function decodeMsg() {
        decodeArea.value = handleEncoding(decodeArea.value, false)
    }
}
// In this problem, you should create a JS functionality that encodes and decodes some messages
// which travel to the network.
//     This program should contain two functionalities.
// The first one is to encode the given message and send it to the receiver.
// The second one is to decode the received message and read it (display it).
// When the [Encode and send it] button is clicked, you should get the given message from the first textarea.
//     When you get the current message, you should encode it as follows:
//     • Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER,
//     that represents the current character in that message
//     Clear the sender textarea and add the encoded message to the receiver textarea
// After clicking the [Encode and send it] button the result should be:
// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
//     • Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
//     • Replace the encoded message with the already decoded message in the receiver textarea, to make it readable