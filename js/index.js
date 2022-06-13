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

const courses = [
  {
    id: "course-0",
    title: "Mathematics",
    description:
      "If a teenager is difficult with mathematics, this does not mean at all that he has no abilities - we just need to find a clear explanation with a clear example from life.",
    image: "./images/annie-spratt-math-unsplash.jpg",
  },
  {
    id: "course-1",
    title: "Intro to IT",
    description:
      "The IT industry is growing quickly as companies become more technology-based and the need to manage information becomes increasingly vital. Introduction to IT is geared towards complete beginners looking to take their first steps into the world of Information Technology.",
    image: "./images/jeswin-thomas-it-unsplash.jpg",
  },
  {
    id: "course-2",
    title: "Robotics",
    description:
      "The future is in the hands of our children. They are meant to change the world for the better. In the age of rapidly developing technologies, the field of robotics is gaining more and more momentum.",
    image: "./images/jeswin-thomas-robotics-unsplash.jpg",
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

function createCourse(id, title, description, image) {
  return `
  <div class="course" id=${id}>
    <div class="course__container">
      <div class="course__container-image">
        <img src="${image}" alt="Course image" class="course-image"/>
      </div>
      <div class="course__container-content">
        <h3 class="course__container-content-title">${title}</h3>
        <p class="course__container-content-description">${description}</p>
      </div>
    </div>
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

$(function () {
  courses.forEach((course) => {
    $(".products__wrapper-lower").append(
      $(createCourse(course.id, course.title, course.description, course.image))
    );
  });
});
