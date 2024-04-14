import data from "../../data";
import "./education.css";

const education = () => {
  return `
    <section class="education">
    <h2>Education</h2>
    <ul class='educationList'>
    ${data.education.map((ed) => 
      `<li class='education-li'>
        <div class='degreeContainer'>
            <p class='degree'>${ed.degree}</p>
            <p class='academy'>${ed.academy}</p>
        </div>
      </li>`
      ).join("")}
    </ul>
    </section>
  `;
};

export const Education = () => {
  return education();
};
