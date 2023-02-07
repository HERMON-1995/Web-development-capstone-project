const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

const nav = document.querySelector('.ham-cont');
const xColor = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
  nav.classList.toggle('color');
  xColor.classList.toggle('x-color');
});

// Featured Teachers//

const body = document.querySelector('body');
const main = document.querySelector('main');
const partner = document.querySelector('.partner');
const featured = document.createElement('section');
featured.className = 'featured-teachers';
const footer = document.querySelector('footer');

const teachers = [{
  title: 'Featured Teachers',
  personimg_1: './images/one-teacher.jpg',
  name_1: 'Mary steve',
  discribe_1: 'Experienced front-end developer and UX engineer.',
  par: 'In addition to showcasing their programming skills, They also provided a chance to display their creativity.',

  personimg_2: './images/two-photo.jpg',
  name_2: 'Patricia James',
  discribe_2: 'Experienced JavaScript engineer with impressive front-end coding skills.',

  personimg_3: './images/three-teacher.jpg',
  name_3: 'Aaron Hank',
  discribe_3: 'Software developer, who has extensive experience developing modern applications.',

  personimg_4: './images/four-teacher.jpg',
  name_4: 'Abel Reuben',
  discribe_4: 'Web designer who focuses on creating engaging website designs with responsive UI.',

  personimg_5: './images/fifth-photo.jpg',
  name_5: 'Jennifer Robert',
  discribe_5: 'Full-stack developer and former technical lead at Everpress.',

  personimg_6: './images/sixth-teacher.jpg',
  name_6: 'Linda David',
  discribe_6: 'IT graduate from Melbourne University with a passion for software engineering.',
}];

featured.innerHTML = `
<h2>${teachers[0].title}</h2>
<span class="title-line"></span>
<div class="teachers">
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_1} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_1}</h3>
            <h4>${teachers[0].discribe_1}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_2} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_2}</h3>
            <h4>${teachers[0].discribe_2}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_3} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_3}</h3>
            <h4>${teachers[0].discribe_3}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_4} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_4}</h3>
            <h4>${teachers[0].discribe_4}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_5} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_5}</h3>
            <h4>${teachers[0].discribe_5}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
    <div class="teacher">

        <div class="one-teacher">
            <img src=${teachers[0].personimg_6} alt="A persons' image" width="160" height="160">
        </div>
        <div class="person-text">
            <h3>${teachers[0].name_6}</h3>
            <h4>${teachers[0].discribe_6}</h4>
            <span class="teacher-line"></span>
            <p>${teachers[0].par}</p>
        </div>

    </div>
</div>`;

main.insertBefore(featured, partner);
body.insertBefore(main, footer);
