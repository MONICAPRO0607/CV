import data from "../../data";
import "./tech-skills.css";

const techSkills = () => {
  return `
  <section class='techSkills'>
  <h2>Tech Skills</h2>
  <ul class='tools'>
  ${data.skills.map((skill) => 
    `<li>
      <img class='icon' src=${skill}>
    </li>`
    ).join("")}
  </ul>
  </section>
  `
}
 
export const TechSkills = () => {
  return techSkills();
};