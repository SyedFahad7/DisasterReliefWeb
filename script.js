document.addEventListener("DOMContentLoaded", function() {
    var headerText = document.getElementById("header-text");
    var headerSubtext = document.getElementById("header-subtext");

    // Function to print header subtext word by word
    function printHeaderSubtext() {
        var words = headerSubtext.dataset.text.split(" ");
        headerSubtext.innerHTML = ""; // Clear the inner HTML
        var index = 0;
        function printNextWord() {
            if (index < words.length) {
                headerSubtext.innerHTML += words[index] + " ";
                index++;
                setTimeout(printNextWord, 200); // Delay each word by 200 milliseconds
            } else {
                // After printing all words, loop every 3 seconds
                printSubtextLoop();
            }
        }
        printNextWord();
    }

    // Function to continuously print subtext every 3 seconds
    function printSubtextLoop() {
        setTimeout(function() {
            // Reset index and start printing the header subtext word by word again
            printHeaderSubtext();
        }, 3000); // Repeat every 3 seconds
    }

    // Fade in the header text
    headerText.style.opacity = 0;
    headerText.style.transition = "opacity 2s";
    headerText.style.opacity = 1;

    // Start printing the header subtext after fading in the header text
    setTimeout(function() {
        headerSubtext.style.display = "block";
        printHeaderSubtext();
    }, 2000); // Delay printing subtext by 2 seconds to match the fade-in duration
});
