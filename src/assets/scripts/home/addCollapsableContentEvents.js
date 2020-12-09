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

function toggleContent(elem) {
  let contentToToggle = document.querySelector(
    `[data-expandable=${elem.dataset.trigger}]`
  );

  contentToToggle.classList.toggle("show");
}
