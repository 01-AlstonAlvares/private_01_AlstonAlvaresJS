let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0
function increment() {
   count = count + 1
   countEl.innerText = count
   console.log(count)
}
function save()
{
   let countStr = count + " - "
   saveEl.innerText += countStr
   countEl.textContent = 0
   count = 0
}
