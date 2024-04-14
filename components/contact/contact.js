import data from '../../data'
import './contact.css'

const contact = () => {
  return `
  <section class='contact'>
    <div class='avatarContainer'>
      <img class="avatar" src=${data.contact.avatar} alt=${data.name}>
    </div>  
  
    <h2>Contact</h2>
    <ul class="contactList">
    ${data.contact.contactLinks
      .map(
        (link) =>
          `<li class='contact-link'>
          <img class="contact-link-image" src="${link.icon}">
        <a href="${
          link.type == 'email' ? 'mailto:' : link.type == 'phone' ? 'tel:' : ''
        }${link.link}">${link.label}</a>
      </li>`
      )
      .join('')}
    </ul>
  </section>
  `
}

export const Contact = () => {
  return contact()
}
