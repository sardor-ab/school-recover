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

const teachers = [
  {
    id: "teacher-0",
    name: "Dasha Lobacheva",
    position: "Teacher of Mathematics",
    image: "./images/dasha-lobacheva-teacher-unsplash.jpg",
  },
  {
    id: "teacher-1",
    name: "Christina Pevchikh",
    position: "Teacher of Intro to IT",
    image: "./images/christopher-campbell-teacher-unsplash.jpg",
  },
  {
    id: "teacher-2",
    name: "Amal Agzamov",
    position: "Teacher of Robotics",
    image: "./images/amal-aglamov-teacher-unsplash.jpg",
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

function createTeacherCard(id, name, position, image) {
  return `
  <div class="teacher-card" id=${id}>
    <div class="teacher-card__container">
      <div class="teacher-card__container-image">
        <img src="${image}" alt="Teacher image" class="teacher-image"/>
      </div>
      <div class="teacher-card__container-content">
        <h3 class="teacher-card__container-content-name">${name}</h3>
        <p class="teacher-card__container-content-position">${position}</p>
        <div class="teacher-card__container-content-social wrapper__socials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
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

$(function () {
  teachers.forEach((teacher) => {
    $(".team__wrapper-lower").append(
      $(
        createTeacherCard(
          teacher.id,
          teacher.name,
          teacher.position,
          teacher.image
        )
      )
    );
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".site-header").addClass("fixed-header");
    }
  });
});

$(".button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#join__form").offset().top,
    },
    2000
  );
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
