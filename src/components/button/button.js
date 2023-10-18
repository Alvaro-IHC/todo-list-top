import icon from "../icon/icon";
import "./styles.css";

const button = (app, project) => {
  const buttonElement = document.createElement("button");
  const label = document.createElement("p");
  const removeIcon = icon({
    iconName: "fa-solid fa-trash-can",
    // onClick: () => app.removeProject(project.id),
    // className: "test",
  });

  buttonElement.classList.add("project-button");

  label.textContent = project.title;

  buttonElement.append(label, removeIcon);

  return buttonElement;
};

export default button;
