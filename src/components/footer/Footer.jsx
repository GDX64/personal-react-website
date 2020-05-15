import React from "react";
//import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends React.Component {
  state = {
    hidden: true
  };

  emailAnimation = () => {
    this.setState({ hidden: !this.state.hidden });
  };
  render() {
    return (
      <div className="footer-container">
        <div className="contacts">
          <span className="contact">
            <a
              href="https://www.linkedin.com/in/gabriel-e-l-machado/"
              className="contact-link"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </span>
          <span className="contact">
            <a href="https://github.com/GDX64" className="contact-link">
              <i class="fab fa-github" />
            </a>
          </span>
          <span className="contact">
            <i onClick={this.emailAnimation} class="far fa-envelope" />
            <div
              className={`email-popover ${
                this.state.hidden ? "hidden-email-popover" : ""
              }`}
            >
              gabriel.delmachado@gmail.com
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
