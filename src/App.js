import React from 'react';
import { Footer, FOOTER_OPERATIONS } from "./common/Footer";
import { Header } from "./common/Header";
import { MenuHolder } from './common/MenuHolder';
import { SideBar } from "./common/Sidebar";
import { MENU } from "./data/menu";
import { SideBarService } from './services/SidebarService';
import { deepCloneObject } from "./utility/Utility";
function App() {
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(Object.keys(MENU.menuDetails)[0]);
  const [menuDetails, setMenuDetails] = React.useState(MENU.menuDetails);
  const copyOfMenuDetails = React.useRef(deepCloneObject(menuDetails));

  const onItemClicked = (foodId) => {
    const oldMenuDetails = { ...menuDetails };
    const selectedMenu = oldMenuDetails[selectedRestaurant];
    const selectedIndex = selectedMenu.findIndex(item => item.foodid === foodId);
    selectedMenu[selectedIndex].outofstock = !selectedMenu[selectedIndex].outofstock;
    copyOfMenuDetails.current = deepCloneObject(oldMenuDetails);
    setMenuDetails(oldMenuDetails);
  }
  const onBulkOperation = (operationType) => {
    const oldMenuDetails = { ...menuDetails };
    oldMenuDetails[selectedRestaurant].forEach(item => {
      item.outofstock = FOOTER_OPERATIONS.ALL_UNAVAILABLE === operationType ? true : false;
    });
    copyOfMenuDetails.current = deepCloneObject(oldMenuDetails);
    setMenuDetails(oldMenuDetails);
  }
  const onSearch = search => {
    if (search?.trim() !== "") {
      let oldMenuDetails = { ...menuDetails };
      let filteredMenu = copyOfMenuDetails.current[selectedRestaurant].filter(item => item.foodname.toLowerCase().includes(search?.toLowerCase()));
      oldMenuDetails[selectedRestaurant] = filteredMenu;
      setMenuDetails(oldMenuDetails);
    } else {
      setMenuDetails(copyOfMenuDetails.current);
    }

  }
  return (
    <div className="full-width-and-height">
      <Header
        onSearch={onSearch}
      />
      <div className="full-width display-flex flex-row">
        <SideBar
          items={Object.keys(MENU.menuDetails)}
          onSelect={(item) => {
            if (window.innerWidth <= 700) {
              SideBarService.toggleSidebar();
            }
            setSelectedRestaurant(item)
          }}
          selectedItem={selectedRestaurant} />
        <MenuHolder
          items={menuDetails[selectedRestaurant]}
          onItemClicked={onItemClicked}
        />
      </div>
      <Footer
        onBulkOperation={onBulkOperation}
      />
    </div>
  );
}

export default App;
