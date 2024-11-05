    let textarea = document.getElementById("keylogger")

    function handleKeypress(event) {
        if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
            if (document.activeElement === textarea) {
                textarea.value += event.key + event.key
            } else {
                textarea.value += event.key
            }
        }
    }

    document.addEventListener("keypress", handleKeypress)

