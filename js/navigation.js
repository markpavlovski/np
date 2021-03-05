document.addEventListener("DOMContentLoaded", function() {
  const elem = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elem, null);

  const slideOutElement = document.querySelector('#slide-out')
  const sideNavInstance = M.Sidenav.getInstance(slideOutElement)
  slideOutElement.addEventListener("click", (e)=>{
    sideNavInstance.close()
  });

  handleBanner();

});

const renderMenu = (id) => {
  const navElement = document.querySelector(".main-nav-items");
  const subNavElement = document.querySelector(".sub-nav-items");
  const slideOut = document.querySelector("#slide-out");
  const activeItem = navItems.find((el) => el.id === id) || {};
  const activeBottomItem = bottomNavItems.find((el) => el.id === id) || {};

  navElement
    ? (navElement.innerHTML = `
        ${navItems.map((item) => renderItem(item, activeItem)).join("")}
  `)
    : "";
  subNavElement
    ? (subNavElement.innerHTML = `
        ${activeItem && activeItem.subItems ? activeItem.subItems.map((item) => renderSubItem(item)).join("") : ""}
  `)
    : "";

  slideOut
    ? (slideOut.innerHTML = `
    ${navItems.map((item) => renderSlideOut(item, activeItem)).join("")}
    ${bottomNavItems.map((item) => renderSlideOut(item, activeBottomItem)).join("")}
  `)
    : "";
};

const renderItem = (navItem, activeItem) => {
  return `
    <li class="main-nav-item">
      <div class="flex-holder">
        <a href="${navItem.path}">${navItem.name}</a>
        ${activeItem && navItem.id === activeItem.id ? `<div class="tick"/>` : ""}
      </div>
    </li>
  `;
};

const renderBottomItem = (navItem, activeItem) => {
  return `
    <li class="bottom-nav-item">
      <div class="flex-holder">
        <a href="${navItem.path}">${navItem.name}</a>
      </div>
    </li>
  `;
};

const renderSubItem = (subItem) => {
  return `
  <li class="sub-nav-item">
    <a href="${subItem.anchor}">${subItem.name}</a>
  </li>
  `;
};

const renderSlideOut = (item, activeItem) => {


  return `
  <li class='slide-out-item ${item.id === activeItem.id ? "active-slide-out-item" : ""}'><a href='${item.path}'>${item.name}</a></li>
  ${
    item.id === activeItem.id && item && item.subItems
      ? item.subItems
          .map((subItem) => `<li class='slide-out-sub-item'><a href="${item.path + subItem.anchor}">${subItem.name}</a></li>`)
          .join("")
      : ""
  }
  `;
};

const renderBottomMenu = (id) => {
  const navElement = document.querySelector(".bottom-nav-items");
  const activeItem = bottomNavItems.find((el) => el.id === id);
  navElement
    ? (navElement.innerHTML = `
        ${bottomNavItems.map((item) => renderBottomItem(item, activeItem)).join("")}
  `)
    : "";
};

const navItems = [
  {
    id: "rentals",
    name: "Rentals",
    path: "index.html",
    subItems: [
      {
        name: "Rental Rates",
        anchor: "#rental-rates"
      },
      {
        name: "Gift Certificates",
        anchor: "#gift-certifacates"
      },
      {
        name: "Season Passes",
        anchor: "#season-passes"
      },
      {
        name: "Group Rentals",
        anchor: "#group-rentals"
      }
    ]
  },
  {
    id: "tours",
    name: "Tours",
    path: "tours.html",
    subItems: [
      {
        name: "Nature Tours",
        anchor: "#nature-tours"
      },
      {
        name: "Birthday Parties",
        anchor: "#birthday-parties"
      },
      {
        name: "Custom Guided Tours",
        anchor: "#custom-tours"
      }
    ]
  },
  {
    id: "instruction",
    name: "Instruction",
    path: "instruction.html",
    subItems: [
      {
        name: "Paddling Clinics",
        anchor: "#paddling-clinics"
      },
      {
        name: "Private Lessons",
        anchor: "#private-lessons"
      }
    ]
  },
  {
    id: "camp",
    name: "River Camp",
    path: "river-camp.html",
    subItems: [
      {
        name: "Covid Safety",
        anchor: "#covid-safety"
      },
      {
        name: "Sessions",
        anchor: "#sessions"
      },
      {
        name: "Dates & Prices",
        anchor: "#dates-prices"
      },
      {
        name: "About River Camp",
        anchor: "#about-camp"
      },
      {
        name: "Testimonials",
        anchor: "#testimonials"
      }
    ]
  },
  {
    id: "education",
    name: "River Classroom",
    path: "river-classroom.html",
    subItems: []
  },
  {
    id: "directions",
    name: "Directions",
    path: "directions.html",
    subItems: []
  }
];

const bottomNavItems = [
  {
    id: "about-us",
    name: "About Us",
    path: "about-us.html"
  },
  {
    id: "employment",
    name: "Employment",
    path: "careers.html"
  },
  {
    id: "events",
    name: "Events",
    path: "events.html"
  },
  {
      id: "forms",
      name: "Forms",
      path: "forms.html"
  },
  {
      id: "boat-sale",
      name: "Boat Sale",
      path: "boat-sale.html"
  }
];

const handleBanner = () => {
  const wrap = document.querySelector('.wrap');
  wrap.innerHTML = `
      <div id="banner" >
        <b>Covid 19 Update March 1, 2021</b> <br />
<br />
We are happy to announce that many of our offerings are returning this season!  River Camp, in a modified form, will run this summer!!!  Tours and instruction are being planned.  Rentals will continue to be by reservation and may be made online.  Season passes, group rentals (call to book), and private boat launches accompanying rentals (for a fee with permission in advance) will again be allowed.  There are still many unknowns, but we will continue to follow CDC recommended COVID safety protocols for disinfecting, distancing, and mask-wearing to keep us all safe.
<br />
We’re excited to see you all this season!
<br /><br />

		Diane & Pete Carson
        </div>
      ` + wrap.innerHTML;


};
