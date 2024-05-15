const checkboxes = document.querySelectorAll("input[type='checkbox']")
const subText = document.querySelector(".subnot")
const subBtn = document.querySelector(".confirm")


checkboxes.forEach(function (checkbox) {


    checkbox.addEventListener("click", function () {
        subText.innerHTML = `Thank you for subscribing to my Website, you subscribed for ${checkbox.id}`
        subBtn.style.display = "inline-block"

        checkboxes.forEach(function (otherCheckBox) {
            if (otherCheckBox !== checkbox) {
                otherCheckBox.checked = false;
            }
        })
    })


})



subBtn.addEventListener("click", function () {

    alert(subText.innerHTML)


})

