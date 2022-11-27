
/**
 * tries to click the skip ad banner if it exists
 */
function skipAddRect() {
    console.log("hi");
    //get that element
    let skipButton = document.getElementsByClassName("ytp-ad-skip-button-text")[0];
    //if it is in the returned array of HTML stuff click it and return true
    if (skipButton != null) {
        skipButton.click();
        return true;
    } else {
        //otherwise return false
        return false;
    }

}

// variable to store our intervalID
let nIntervId;
let nIntervId2;
function startprocess() {
    nIntervId = setInterval(adSkipSearch, 400);
    //nIntervId2 = setInterval(tryfindstopseeing, 400);
}

function hitadInfoButton() {
    console.log("i");
    let infobutton = document.getElementsByClassName("ytp-ad-button ytp-ad-button-link ytp-ad-clickable")[0];

    if (infobutton != null) {
        infobutton.click();
        let i;
        let stopseeing;
        try {
            i = document.getElementById("iframe");
            stopseeing = i.contentWindow.document.getElementsByClassName("VfPpkd-Jh9lGc")[0];
            console.log("stopseeingi: " + stopseeing);
            if (stopseeing != null) {
                stopseeing.click();
                let continuebutton = i.contentWindow.document.getElementsByClassName("VfPpkd-vQzf8d")[7];
                if (continuebutton != null) {
                    continuebutton.click();
                    let xbutton = i.contentWindow.document.getElementsByClassName("VfPpkd-Bz112c-Jh9lGc")[0];
                    if (xbutton != null) {
                        xbutton.click();
                        console.log("shot down!");
                        return true;
                    }
                }
            }
        } catch (error) {
            console.log(error);
            //stopseeing = document.getElementsByClassName("VfPpkd-Jh9lGc")[0];
        }
        // console.log("stopseeing: " + stopseeing);
        // if (stopseeing != null) {
        //     stopseeing.click();
        //     let continuebutton = document.getElementsByClassName("VfPpkd-vQzf8d")[7];
        //     if (continuebutton != null) {
        //         continuebutton.click();
        //         let xbutton = document.getElementsByClassName("VfPpkd-Bz112c-Jh9lGc")[0];
        //         if (xbutton != null) {
        //             xbutton.click();
        //             console.log("shot down!");
        //             return true;
        //         }
        //     }
        // } else {
        //     //exit the window
        //     let xbutton = document.getElementsByClassName("VfPpkd-Bz112c-Jh9lGc")[0];
        //     if (xbutton != null) {
        //         xbutton.click();
        //     }
        //     //option unavailible so wait 20 seconds to try again
        //     clearInterval(nIntervId);
        //     //also try again in case hasn't loaded yet
        //     //setTimeout(tryfindstopseeing, 200);
        //     setTimeout(startprocess, 20000);
        //     console.log("waiting");
        // }
        } else {
            return false;
        }
    }

function tryfindstopseeing() {
    let i = document.getElementById("iframe")
    let stopseeing = i.contentWindow.document.getElementsByClassName("VfPpkd-Jh9lGc")[0];
    console.log("stopseeing1: " + stopseeing);
    if (stopseeing != null) {
        stopseeing.click();
        let continuebutton = document.getElementsByClassName("VfPpkd-vQzf8d")[7];
        if (continuebutton != null) {
            continuebutton.click();
            let xbutton = document.getElementsByClassName("VfPpkd-Bz112c-Jh9lGc")[0];
            if (xbutton != null) {
                xbutton.click();
                console.log("shot down1!");
                return true;
            }
        }
    }
}

function closeBannerAd() {
    let bannerx = document.getElementsByClassName("ytp-ad-overlay-close-button")[0];

    if (bannerx != null) {
        bannerx.click();
        return true;
    } else {
        return false;
    }
}

function adSkipSearch() {
    skipAddRect();
    closeBannerAd();
    hitadInfoButton();
}

startprocess();