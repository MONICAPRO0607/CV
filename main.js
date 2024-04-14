import {AboutMe} from "./components/about-me/about-me";

import {Contact} from "./components/contact/contact";

import {TechSkills} from "./components/tech-skills/tech-skills";

import {SoftSkills} from "./components/soft-skills/soft-skills";

import {Experiencies} from "./components/experiencies/experiencies";

import {Education} from "./components/education/education";

const app = document.getElementById("app");

const main = () => {
  return `
    <section class="contact" id="contact">
      ${Contact()}
      ${TechSkills()}
      ${SoftSkills()}
    </section>
    <section class="aboutme" id="aboutme">
      ${AboutMe()}
      ${Experiencies()}
      ${Education()}
    </section>
  `;
};

app.innerHTML = main();
