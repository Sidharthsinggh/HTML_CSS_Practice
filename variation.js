
(function () {
try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* all Pure helper functions */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function () {
        if (
        document &&
        document.querySelector(selector) &&
        document.querySelectorAll(selector).length > 0
        ) {
        clearInterval(interval);
        trigger();
        }
    }, delayInterval);
    setTimeout(function () {
        clearInterval(interval);
    }, delayTimeout);
    }
    let egstring = `<div class="egbutton">
    <div class="egbuttons"> <a href="https://trustandwill.com/will/">Start Will</a></div>
    <div class="egbuttons"> <a href="https://trustandwill.com/trust/">Start Trust</a></div>
    <div class="egbuttons"> <a href="https://trustandwill.com/probate/">Start Probate</a></div>
</div>`
    function init() {
    document.querySelector("#simple-content-block_section_7A4R1K7dKVyVWyVoTHd5Iu > div >div > div >div").insertAdjacentHTML("afterend",egstring)
    }
    waitForElement("#simple-content-block_section_7A4R1K7dKVyVWyVoTHd5Iu > div >div > div >div", init, 100, 35000);
} catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
}
})();