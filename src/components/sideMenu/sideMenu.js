import button from "../button/button";

const sideMenu = (app) => {
  const sideMenu = document.createElement("menu");
  sideMenu.classList.add("side-menu");

  const buttons = app.getProjects().map((project) => {
    return button(app, project);
  });

  sideMenu.append(...buttons);

  return sideMenu;
};

export default sideMenu;
