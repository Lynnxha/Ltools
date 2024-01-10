import Image from "next/image";
import Logo from "@/public/lynntoolsnav.png";

export default function page() {
  return (
    <div className="main-container">
      <div className="about">
        <div>
          <h3>About Lynn Tools</h3>
          <p>
            Lynn Tools is a simple yet highly functional web application that
            provides a variety of useful tools.
          </p>
          <p>
            I keep updating it with new features and improvements to make it
            even more useful.
          </p>
        </div>
        <div>
          <h4>Get Involved</h4>
          <p>
            Lynn Tools is aimed to be a collaborative project, and you are
            invited to join the project. All contributions are welcome!
          </p>
        </div>
      </div>
      <div className="flexBetweenCenter">
        <span>
          <a href="https://github.com/Lynnxha" target="_blank">
            <h5 className="text-aqua">Follow on Github</h5>
          </a>
        </span>
        <h5>
          <a href="https://instagram.com/kibieptr_">Contact Me</a>
        </h5>
      </div>
    </div>
  );
}
