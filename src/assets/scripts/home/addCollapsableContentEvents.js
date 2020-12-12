export default function addCollapsableContentEvents() {
  let toggleTriggers = [].slice.call(
    document.querySelectorAll(".author-description__link")
  );

  toggleTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      toggleContent(e.target);
    });
  });
}

function toggleContent(trigger) {
  let contentToToggle = document.querySelector(
    `[data-expandable=${trigger.dataset.trigger}]`
  );

  contentToToggle.classList.toggle("show");

  trigger.ariaExpanded === "true"
    ? (trigger.ariaExpanded = "false")
    : (trigger.ariaExpanded = "true");

  contentToToggle.tabIndex === "-1"
    ? (contentToToggle.tabIndex = "0")
    : (contentToToggle.tabIndex = "-1");
}
