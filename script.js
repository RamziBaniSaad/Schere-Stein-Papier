"use strict";

const botChoice = document.getElementById("botChoice");
const playerChoice = document.getElementById("playerChoice");
const result = document.getElementById("result");
const selectionButtons = document.querySelectorAll("#selectionSection button");
const draw = ["Unentschieden!", "Kein Gewinner!", "Kein Verlierer!", "Knapp!"];
const selection = ["schere", "stein", "papier"];

const Schere = document.getElementById("schere");
const Stein = document.getElementById("stein");
const Papier = document.getElementById("papier");

const playerChoiceText = document.getElementById("playerChoiceText");
const botChoiceText = document.getElementById("botChoiceText");

function fight() {
    container.classList.add("fightBackground");
    container.classList.add("fightAnimation1");
    Schere.classList.add("fightAnimationS");
    if (document.body.offsetWidth <= 700) {Schere.innerHTML = null;}
    setTimeout(() => {
        container.classList.add("fightAnimation2");
        container.classList.remove("fightAnimation1");
        Stein.classList.add("fightAnimationS");
        if (document.body.offsetWidth <= 700) {Stein.innerHTML = null;}
        result.innerHTML = "??";
    }, 300);
    setTimeout(() => {
        container.classList.remove("fightAnimation2");
        container.classList.add("fightAnimation3");
        Papier.classList.add("fightAnimationS");
        if (document.body.offsetWidth <= 700) {Papier.innerHTML = null;}
        result.innerHTML = "???";
    }, 600);
    setTimeout(() => {
        container.classList.remove("fightBackground");
        container.classList.remove("fightAnimation3");
        Schere.classList.remove("fightAnimationS");
        Stein.classList.remove("fightAnimationS");
        Papier.classList.remove("fightAnimationS");
        Schere.innerHTML = `<img src="img/schere.png">Schere`;
        Stein.innerHTML = `<img src="img/stein.png">Stein`;
        Papier.innerHTML = `<img src="img/papier.png">Papier`;
    }, 900);
};

function winResult() {
    result.classList.add("readyState");
    result.innerHTML = "?";
    result.classList.remove("drawStyle");
    fight();
    setTimeout(() => {
        result.classList.remove("readyState");
        result.innerHTML = "Du gewinnst!";
        result.classList.add("teamPlayer");
        result.classList.remove("teamBot");
        result.classList.add("wonAnimation");
        result.classList.add("resultAnimation");
        container.classList.add("wonBackground");
        container.classList.remove("lostBackground");
        container.classList.remove("drawBackground");
        setTimeout(() => {
            result.classList.remove("wonAnimation");
            result.classList.remove("resultAnimation");
        }, 500);
    }, 900);
};

function loseResult() {
    result.classList.add("readyState");
    result.innerHTML = "?";
    result.classList.remove("drawStyle");
    fight();
    setTimeout(() => {
        result.classList.remove("readyState");
        result.innerHTML = "Du verlierst!";
        result.classList.add("teamBot");
        result.classList.remove("teamPlayer");
        result.classList.add("lostAnimation");
        result.classList.add("resultAnimation");
        container.classList.add("lostBackground");
        container.classList.remove("wonBackground");
        container.classList.remove("drawBackground");
        setTimeout(() => {
            result.classList.remove("lostAnimation");
            result.classList.remove("resultAnimation");
        }, 500);
    }, 900);
};

function disableButtons() {
    Schere.disabled = true;
    Schere.classList.add("fightButton");
    Stein.disabled = true;
    Stein.classList.add("fightButton");
    Papier.disabled = true;
    Papier.classList.add("fightButton");
    setTimeout(() => {
        Schere.disabled = false;
        Schere.classList.remove("fightButton");
        Stein.disabled = false;
        Stein.classList.remove("fightButton");
        Papier.disabled = false;
        Papier.classList.remove("fightButton");
    }, 950);
};

selectionButtons.forEach(i => {
    i.addEventListener("click", function() {
        disableButtons();

        // Bot Wahl
        const botDecision = selection[Math.floor(Math.random() * selection.length)];
        botChoice.innerHTML = "?";
        botChoice.classList.add("teamBot");
        botChoice.classList.remove("readyState");
        setTimeout(() => {
            botChoice.innerHTML = botDecision;
        }, 900);

        // Spieler Wahl
        const playerDecision = this.id;
        playerChoice.innerHTML = playerDecision;
        playerChoice.classList.add("teamPlayer");
        playerChoice.classList.remove("readyState");

        //// Wahl Hover

        // Bot
        setTimeout(() => {
            if (botChoice.innerHTML === "schere") {
                    botChoice.addEventListener("mouseenter", function() {
                        botChoice.innerHTML = "&#9986;&#65039;";
                        botChoice.style.fontSize = "50px";
                        botChoice.style.padding = "0px 30px 0px 30px";
                    });
                    botChoice.addEventListener("mouseleave", function() {
                        botChoice.style.fontSize = "35px";
                        botChoice.style.padding = "0 0 25px 0";
                        botChoice.innerHTML = botDecision;
                    });
                } else if (botChoice.innerHTML === "stein") {
                    botChoice.addEventListener("mouseenter", function() {
                        botChoice.innerHTML = "&#128511;";
                        botChoice.style.fontSize = "50px";
                        botChoice.style.padding = "0px 15px 0px 15px";
                    });
                    botChoice.addEventListener("mouseleave", function() {
                        botChoice.style.fontSize = "35px";
                        botChoice.style.padding = "0 0 25px 0";
                        botChoice.innerHTML = botDecision;
                    });
                } else if (botChoice.innerHTML === "papier") {
                    botChoice.addEventListener("mouseenter", function() {
                        botChoice.innerHTML = "&#128184;";
                        botChoice.style.fontSize = "50px";
                        botChoice.style.padding = "0px 30px 0px 30px";
                    });
                    botChoice.addEventListener("mouseleave", function() {
                        botChoice.style.fontSize = "35px";
                        botChoice.style.padding = "0 0 25px 0";
                        botChoice.innerHTML = botDecision;
                    });
                };
        }, 900);

        // Spieler 
        if (playerChoice.innerHTML === "schere") {
                playerChoice.addEventListener("mouseenter", function() {
                    playerChoice.innerHTML = "&#9986;&#65039;";
                    playerChoice.style.fontSize = "50px";
                    playerChoice.style.padding = "0px 30px 0px 30px";
                });
                playerChoice.addEventListener("mouseleave", function() {
                    playerChoice.style.fontSize = "35px";
                    playerChoice.style.padding = "0 0 25px 0";
                    playerChoice.innerHTML = playerDecision;
                });
            } else if (playerChoice.innerHTML === "stein") {
                playerChoice.addEventListener("mouseenter", function() {
                    playerChoice.innerHTML = "&#128511;";
                    playerChoice.style.fontSize = "50px";
                    playerChoice.style.padding = "0px 15px 0px 15px";
                });
                playerChoice.addEventListener("mouseleave", function() {
                    playerChoice.style.fontSize = "35px";
                    playerChoice.style.padding = "0 0 25px 0";
                    playerChoice.innerHTML = playerDecision;
                });
            } else if (playerChoice.innerHTML === "papier") {
                playerChoice.addEventListener("mouseenter", function() {
                    playerChoice.innerHTML = "&#128184;";
                    playerChoice.style.fontSize = "50px";
                    playerChoice.style.padding = "0px 30px 0px 30px";
                });
                playerChoice.addEventListener("mouseleave", function() {
                    playerChoice.style.fontSize = "35px";
                    playerChoice.style.padding = "0 0 25px 0";
                    playerChoice.innerHTML = playerDecision;
                });
            };

        // Ergebnis
        if (playerDecision === botDecision) {
            let i = Math.floor(Math.random() * draw.length);
            result.classList.add("readyState");
            result.innerHTML = "?";
            result.classList.remove("drawStyle");
            fight();
            setTimeout(() => {
                result.classList.remove("readyState");
                result.innerHTML = draw[i];
                result.classList.add("drawStyle");
                result.classList.add("drawAnimation");
                container.classList.add("drawBackground");
                container.classList.remove("wonBackground");
                container.classList.remove("lostBackground");
                setTimeout(() => {
                    result.classList.remove("drawAnimation");
                }, 500);
            }, 900);
        } else if (
            playerDecision === "schere" && botDecision === "papier" ||
            playerDecision === "stein" && botDecision === "schere" ||
            playerDecision === "papier" && botDecision === "stein"
        ) {
            winResult()
        } else {
            loseResult()
        };
    });
});

playerChoiceText.addEventListener("mouseenter", function() {
    playerChoiceText.innerHTML = "&#128100;";
    playerChoiceText.classList.add("noStyle");
});
playerChoiceText.addEventListener("mouseleave", function() {
    playerChoiceText.innerHTML = "Deine Wahl";
    playerChoiceText.classList.remove("noStyle");
});

botChoiceText.addEventListener("mouseenter", function() {
    botChoiceText.innerHTML = "&#129302;";
    botChoiceText.classList.add("noStyle");
});
botChoiceText.addEventListener("mouseleave", function() {
    botChoiceText.innerHTML = "Bot Wahl";
    botChoiceText.classList.remove("noStyle");
});

// Sicht Hilfe
function sightHelpAll() {
    container.classList.add("sightHelp");
    introSection.classList.add("sightHelp");
    choiceSection.classList.add("sightHelp");
    playerChoiceDiv.classList.add("sightHelp");
    playerChoice.classList.add("sightHelp");
    botChoiceDiv.classList.add("sightHelp");
    botChoice.classList.add("sightHelp");
    resultSection.classList.add("sightHelp");
    result.classList.add("sightHelp");
    selectionSection.classList.add("sightHelp");
    schere.classList.add("sightHelp");
    stein.classList.add("sightHelp");
    papier.classList.add("sightHelp");
};

// sightHelpAll()