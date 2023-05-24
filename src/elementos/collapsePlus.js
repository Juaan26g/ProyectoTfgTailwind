document.addEventListener('DOMContentLoaded', function () {
  var toggleBothButton = document.querySelector('[data-hs-toggle-both]');
  if (!toggleBothButton) return;

  toggleBothButton.addEventListener('click', function () {
    var firstCollapseToggle = document.querySelector('[data-hs-collapse="#hs-basic-collapse-heading2"]');
    var secondCollapseToggle = document.querySelector('[data-hs-collapse="#hs-basic-collapse-heading3"]');

    if (firstCollapseToggle && secondCollapseToggle) {
      firstCollapseToggle.click();
      secondCollapseToggle.click();
    }
  });
});