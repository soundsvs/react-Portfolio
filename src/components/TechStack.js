import "./style.css"
function TechStack() {
  return (
    <div className="techtag">
      <h2 className="border">Tech stack</h2>
      <div className="tech-stack">
        <div className="stack-item">
          <i className="fa-brands fa-html5"></i>
          <h3>HTML & CSS</h3>
          <p>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
        </div>
        <div className="stack-item">
          <i className="fa-brands fa-js"></i>
          <h4>JavaScript</h4>
          <p>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.</p>
        </div>
        <div className="stack-item">
          <i className="fa-brands fa-react"></i>
          <h4>React</h4>
          <p>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
