let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

const features = [
  {
    id: "feature-0",
    icon: "fa-graduation-cap",
    title: "Expert instruction",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    id: "feature-1",
    icon: "fa-sliders",
    title: "Training Courses",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    id: "feature-2",
    icon: "fa-book",
    title: "Expert instruction",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
];

const extras = [
  {
    id: "extra-0",
    upperContent: "15K",
    lowerContent: "Happy Customers",
  },
  {
    id: "extra-1",
    upperContent: "150K",
    lowerContent: "Monthly Visitors",
  },
  {
    id: "extra-2",
    upperContent: "15",
    lowerContent: "Countries Worldwide",
  },
  {
    id: "extra-3",
    upperContent: "100+",
    lowerContent: "Top Partners",
  },
];

function createFeature(id, icon, title, description) {
  return `
  <div class="feature" id=${id}>
    <div class="feature__container">
      <div class="feature__container-icon">
        <i class="fa-solid ${icon} feature-icon"></i>
      </div>
      <span class="feature__container-title">${title}</span>
      <span class="feature__container-description">${description}</span>
    </div>
  </div>`;
}

function createExtra(id, upperContent, lowerContent) {
  return `
  <div class="extra__container-item" id=${id}>
    <span class="extra__container-item-top">${upperContent}</span>
    <span class="extra__container-item-bottom">${lowerContent}</span>
  </div>`;
}

$(function () {
  features.forEach((feature) => {
    $(".hero__wrapper-lower").append(
      $(
        createFeature(
          feature.id,
          feature.icon,
          feature.title,
          feature.description
        )
      )
    );
  });
});

$(function () {
  extras.forEach((extra) => {
    $(".extra__container").append(
      $(createExtra(extra.id, extra.upperContent, extra.lowerContent))
    );
  });
});
