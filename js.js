let accordionItems = document.querySelectorAll(".tab");
let accordionItemsContent = document.querySelectorAll(".tab-content");
function hideAllTabs() {
  for (let i = 0; i < accordionItems.length; i++) {
    accordionItemsContent[i].classList.add("hidden");
  }
}
for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function () {
    hideAllTabs();
    accordionItemsContent[i].classList.remove("hidden");
  });
}
