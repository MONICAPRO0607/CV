import data from "../../data";
import "./soft-skills.css";

const softSkills = () => {
  return `
  <section class='softSkills'>
    <h2>Soft Skills</h2>
    <ul>
    ${data.softSkills.map((softSkill,index) => 
      `<li>
      ${softSkill}
      </li>`
      ).join("")}
    </ul>
  
  </section>
  `
}

export const SoftSkills = () => {
  return softSkills();
};