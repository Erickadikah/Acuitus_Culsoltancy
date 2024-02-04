import React from "react";
import "../../assets/styles/landingPage/footer.scss";
import { footerItems } from "./footerDescriptor";



const footerContent = footerItems.map((item, index) => {
  const {title, children} = item;
  const footerLink = children.sort().map((child, index) => <li key={index}><a href='#'>{child}</a></li>)
  return (
    <div key={index}>
      <h5 className="text-secondary">{title}</h5>
      <ul className="list-unstyled">{footerLink}</ul>
    </div>
  )
})


export default function PageFooter() {
  return (
    <footer>
      <div className="footer-content">
        {
          footerContent
        }
      </div>
    </footer>
  );
}
