const box = document.querySelector(".box");
const btn = document.querySelector(".add");
const del = document.querySelector(".remove");
const defore = document.querySelector(".before");
const after = document.querySelector(".after");
const selected = document.querySelector(".selected");
let count = 1;
let copyAfter =1
let copyBefore =1

btn.addEventListener("click", (el) => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = count;
  count++;
  item.onclick = function () {
    defore.addEventListener("click", () => {
      const clonedNode = item.cloneNode(true);
      clonedNode.innerText = `${this.innerText} -${copyBefore}c`;
      if (this.classList.contains("active")) {
        copyBefore++
        this.before(clonedNode);
        this.classList.remove("active");
        clonedNode.classList.remove("active");
      }
    });

    after.addEventListener("click", (el) => {
      const clonedNode = item.cloneNode(true);
      clonedNode.innerText = `${this.innerText} -${copyAfter}c`;
      if (this.classList.contains("active")) {
        copyAfter++
        this.after(clonedNode);
        this.classList.remove("active");
        clonedNode.classList.remove("active");
      }
    });

    hideAll(this);
    this.classList.toggle("active");
    selected.innerText = `Selected el: ${this.innerText}`;

    del.addEventListener("click", (el) => {
      if (this.classList.contains("active")) this.classList.add("del");
    });
  };
  box.append(item);
});

const hideAll = (eL) => {
  const items = document.querySelectorAll(".item");
  items.forEach((el) => {
    if (el != eL) el.classList.remove("active");
  });
};
