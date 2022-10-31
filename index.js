let toggler = document.querySelector("#toggler");
toggler.addEventListener("click", () => {
    togglelight()
})
$(".dot").click(() => {
    togglelight()
})
function togglelight() {
    if ($(".dot").css("left") == "65px") {
        $("html").attr("data-theme", "light");
        $(".dot").css("left", "86px");
    } else if (($(".dot").css("left") == "86px")) {
        $("html").attr("data-theme", "magniop");
        $(".dot").css("left", "107px")
    }
    else if (($(".dot").css("left") == "107px")) {
        $("html").attr("data-theme", "normal");
        $(".dot").css("left", "65px")
    }
}
var dlt = document.querySelector(".dltbtn")
let result = document.querySelector(".result");

let keys = Array.from(document.getElementsByClassName('butn'));

keys.map(key => {
    key.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'RESET':
                result.innerText = '';
                break;
            case '=':
                try {
                    result.innerText = eval(result.innerText.replace(/[^-+/.*\d]/g, ''));

                } catch {
                    result.innerText = "err"
                }
                break;
            case 'DEL':
                if (result.innerText) {
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});