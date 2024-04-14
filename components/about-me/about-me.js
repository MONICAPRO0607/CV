import data from "../../data";
import "./about-me.css";

const about = () => {
  return `
    <section class="presentation">
      <h2 class="name">${data.name}</h2>
      <h3 class="rol">${data.rol}</h3>
      <p class='description'>${data.aboutMe}</p>
    </section>
  `;
};

export const AboutMe = () => {
  return about();
};
