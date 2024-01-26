let countPl = document.getElementById("people_count") 
let entries = document.getElementById("entries")
let count = 0 
function increment()
{
    count += 1
    countPl.innerHTML = count
    console.log(count)
}

function save()
{
    let str = count + " - "
    entries.innerHTML += str
    countPl.innerHTML = 0
    count = 0
}