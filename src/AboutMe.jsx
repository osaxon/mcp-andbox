import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About This Experiment</h1>
      <p>
        This page was created as part of an experiment to test GitHub Copilot's ability to scaffold, modify, and manage a React application using Vite, including GitHub repository integration and workflow automation.
      </p>
      <p>
        The process included:
      </p>
      <ul>
        <li>Scaffolding a new React app with Vite</li>
        <li>Pushing the project to a new GitHub repository</li>
        <li>Managing authentication for multiple GitHub accounts</li>
        <li>Creating this About page on a feature branch and opening a pull request</li>
      </ul>
      <p>
        Styling and routing were added to demonstrate a typical workflow for modern React projects.
      </p>
    </div>
  );
}

export default AboutMe;
