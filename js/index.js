const bill = document.querySelector("#input-bill");
const numOfPeople = document.querySelector("#input-people");
const inputTip = document.querySelector("#input-tip");
const tips = document.querySelectorAll(".tip");
const errorMsg = document.querySelector(".error-msg");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

var fTip = 0.05;
var fBill = 0;
var iPeople = 1;

tips.forEach((tip) => {
    tip.addEventListener("click", () => {
        // remove class active
        tips.forEach((tipEle) => {
            tipEle.classList.remove("active");
        });

        // add class active
        tip.classList.add("active");
        fTip = tip.dataset.per;
        calculator();
    });
});

bill.addEventListener("input", () => {
    // validate and round
    fBill = bill.value;
    aSplitBill = fBill.split(".");

    if (aSplitBill.length > 1) {
        sDecimal = aSplitBill[1].slice(0, 2);
        fBill = aSplitBill[0] + "." + sDecimal;
        bill.value = fBill;
    }
    calculator();
});

numOfPeople.addEventListener("input", () => {
    // validate and round
    iPeople = numOfPeople.value;
    aNumOfPeople = iPeople.split(".");

    if (aNumOfPeople.length > 1) {
        iPeople = aNumOfPeople[0];
        numOfPeople.value = aNumOfPeople[0];
    }

    if (iPeople == 0) {
        errorMsg.innerText = "Can't be zero";
        numOfPeople.classList.add("error");
    } else {
        errorMsg.innerText = "";
        numOfPeople.classList.remove("error");
        calculator();
    }
});

inputTip.addEventListener("input", () => {
    // validate and round
    fTip = inputTip.value;
    aSplitTip = fTip.split(".");

    if (aSplitTip.length > 1) {
        sDecimal = aSplitTip[1].slice(0, 2);
        fTip = aSplitTip[0] + "." + sDecimal;
        inputTip.value = fTip;
    }

    tips.forEach((tipEle) => {
        tipEle.classList.remove("active");
    });

    calculator();
});

var calculator = () => {
    var tip = (fBill * fTip) / iPeople;
    tipAmount.innerText = "$" + tip.toFixed(2);
    if (fBill > 0 && iPeople > 0) {
        var calTip = (fBill * fTip) / iPeople;
        var calBill = fBill / iPeople;
        var calTotal = calTip + calBill;
        total.innerText = "$" + calTotal.toFixed(2);
    } else {
        total.innerText = "$00.00";
    }
};
