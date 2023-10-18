import sideMenu from "./components/sideMenu/sideMenu";
import { AppController } from "./logic/AppController";

const ScreenController = () => {
  const app = AppController();

  const updateScreen = () => renderScreen();

  const renderScreen = () => {
    const menu = sideMenu(app);

    document.getElementById("content").appendChild(menu);
  };

  renderScreen();

  return {
    updateScreen,
    // renderScreen,
  };
};

export default ScreenController;
