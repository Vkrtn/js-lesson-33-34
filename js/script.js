const box = document.querySelector(".box");
const btn = document.querySelector(".add");
const del = document.querySelector(".remove");
const defore = document.querySelector('.before')
const after = document.querySelector('.after')
const selected = document.querySelector(".selected");
let count = 1;

btn.addEventListener("click", (el) => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = count;
  count++;
  item.onclick = function () {

    hideAll(this);
    this.classList.add("active");
    selected.innerText = `Selected el: ${this.innerText}`;

    del.addEventListener('click',el=>{
       if(this.classList.contains('active'))this.classList.add('del')
    })

    defore.addEventListener('click',el=>{
        let clonedNode = document.createElement('div')
        clonedNode.className = 'item';
        clonedNode.innerText = `${this.innerText} -c`
        if (this.classList.contains('active'))this.before(clonedNode)
    })   
     after.addEventListener('click',el=>{
        let clonedNode = document.createElement('div')
        clonedNode.className = 'item';
        clonedNode.innerText = `${this.innerText} -c`
        if (this.classList.contains('active'))this.after(clonedNode)
    })
  };

  box.append(item);
});



const hideAll = (eL) => {
  const items = document.querySelectorAll(".item");
  items.forEach((el) => {
    if (el != eL) el.classList.remove("active");
  });
};

