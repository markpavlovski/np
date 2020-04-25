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
  const SHOW_MORE_BUTTON_TEXT = "Show more";
  const SHOW_LESS_BUTTON_TEXT = "Show less";


  const wrap = document.querySelector('.wrap');
  wrap.innerHTML = `
      <div id="banner">
          <b>Covid 19 Response:</b>
          Because of the recent circumstances we will have to be making some changes to how we run our rental stand this summer. We hope we can give everyone the opportunity to go out on the water, but we will have to find a way to do so safely.

          <div id="additional-details" class="hidden">
          We know how important getting out into nature and enjoying the outdoors is, especially during this stressful time. We love being the intermediary between people and nature, and we hope we can find a way to do this safely at some point this year.
<br>
<br>
Our number one priority has to be the safety of our staff and our customers. As we learn more we will be able to make more decisions about how to safely get people out on the water. We will have to make adjustments and update our policies as we go, and we will make sure to share updates as we learn more.
<br>
<br>
We hope you can find a way to get outside and enjoy nature, while practicing social distancing and staying safe. Please be kind to each other, be respectful of the essential workers who are on the front lines every day, make it easier on our health care workers by following the recommendations of the CDC. We will get through this together and find ways to spread joy no matter what the circumstances.
<br><br><br>




We are thinking of how to run our summer camps safely this year. We know that our campers look forward to seeing each other and adventuring out on the river all year. We hope that by the summer we will be able to find a way to run our camps, but our number one priority will have to be the safety of our campers and staff. 
<br><br>

We will be taking deposits to reserve spaces in our camps in case the situation improves and we are able to find a way to safely run our programs. If we are unable to run our camps we will return everyone's deposits, but we are optimistic we will be able to figure out a safe solution. We are consulting with a camp doctor who will make recommendations for us on whether it is possible and ways that we can do so safely.
<br><br>

We love our campers and we hope everyone is healthy and finding ways to stay positive and active despite the situation.
</div>
          <b><a id="details-toggle-button"></a></b>
        </div>
      ` + wrap.innerHTML;
  const button = document.querySelector('#details-toggle-button');
  const detailsBlock = document.querySelector('#additional-details');
  button.innerText = SHOW_MORE_BUTTON_TEXT;

  button.addEventListener("click", (e)=>{
    e.preventDefault();
    if (button.innerText === SHOW_MORE_BUTTON_TEXT){
      button.innerText = SHOW_LESS_BUTTON_TEXT;
      detailsBlock.classList.toggle('hidden');
    } else {
      button.innerText = SHOW_MORE_BUTTON_TEXT;
      detailsBlock.classList.toggle('hidden');
    }
  });


};
