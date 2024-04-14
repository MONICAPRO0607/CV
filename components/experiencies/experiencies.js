import data from "../../data";
import "./experiencies.css";

const experiencies = () => {
  return `
    <section class="experiencies">
    <h2>Work Experience</h2>
    <ul class='workExperiencies'>
    ${data.workExperience.map((experience) => 
      `<li class='experience'>
        <div class='job'>
          <div class='dateJob'>
            <p class='date'>${experience.date}</p>
            <p class='company'>${experience.company}</p>
          </div>
          <div class='position'>${experience.position}</div>
        </div>
        <p class='descriptionJob'>${experience.description}</p>
      </li>`
      ).join("")}
    </ul>
    </section>
  `;
};

export const Experiencies = () => {
  return experiencies();
};
