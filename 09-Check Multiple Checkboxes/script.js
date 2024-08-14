const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

function handleCheck(e) {
    console.log(e)
}

let lastChecked;
function handleCheck(e) {
// Check if they had the shift
// AND check that they are checking

let inBetween = false
if (e.shiftKey && this.checked) {
// go ahead and do what we
    checkboxes.forEach(checkbox => {
        console.log(checkbox)
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween
            console.log('İşaretleme başladı!');
        }
        if(inBetween) {
            checkbox.checked = true;
            }
    })
}
lastChecked = this;
}