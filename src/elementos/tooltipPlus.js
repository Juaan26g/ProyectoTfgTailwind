
const tooltipButtons = document.querySelectorAll('.tooltip-button');
const tooltipElements = document.querySelectorAll('.tooltip-element');

function showTooltip(tooltip) {
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
}

function hideTooltip(tooltip) {
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
}

tooltipButtons.forEach((button) => {
  let tooltip = button.nextElementSibling;

  button.addEventListener('mouseenter', () => {
    if (!button.classList.contains('clicked')) {
      showTooltip(tooltip);
    }
  });

  button.addEventListener('mouseleave', () => {
    if (!button.classList.contains('clicked')) {
      hideTooltip(tooltip);
    }
  });

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    button.classList.toggle('clicked');
    if (button.classList.contains('clicked')) {
      showTooltip(tooltip);
    } else {
      hideTooltip(tooltip);
    }
  });
});

document.addEventListener('click', (event) => {
  let isTooltipButton = false;
  tooltipButtons.forEach((button) => {
    if (button.contains(event.target)) {
      isTooltipButton = true;
    }
  });

  if (!isTooltipButton) {
    tooltipButtons.forEach((button) => {
      button.classList.remove('clicked');
      hideTooltip(button.nextElementSibling);
    });
  }
});
