document.addEventListener("DOMContentLoaded", function() {
    var headerText = document.getElementById("header-text");
    var headerSubtext = document.getElementById("header-subtext");

    function printHeaderSubtext() {
        var words = headerSubtext.dataset.text.split(" ");
        headerSubtext.innerHTML = "";
        var index = 0;
        function printNextWord() {
            if (index < words.length) {
                headerSubtext.innerHTML += words[index] + " ";
                index++;
                setTimeout(printNextWord, 200);
            } else {
                printSubtextLoop();
            }
        }
        printNextWord();
    }

    function printSubtextLoop() {
        setTimeout(function() {
            printHeaderSubtext();
        }, 3000);
    }

    headerText.style.opacity = 0;
    headerText.style.transition = "opacity 2s";
    headerText.style.opacity = 1;

    setTimeout(function() {
        headerSubtext.style.display = "block";
        printHeaderSubtext();
    }, 2000);
});
