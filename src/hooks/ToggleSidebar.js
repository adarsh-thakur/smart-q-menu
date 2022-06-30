import React from "react";
import { COMMON_EVENTS, SideBarService } from "../services/SidebarService";

export function useToggleSideBar() {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(SideBarService.isSidebarVisible);
    React.useEffect(() => {
        const onSideBarToggle = (e) => {
            setIsSidebarVisible(e.detail);
        }
        window.addEventListener(COMMON_EVENTS.SIDE_BAR_TOGGLED, onSideBarToggle);
        return () => {
            window.removeEventListener(COMMON_EVENTS.SIDE_BAR_TOGGLED, onSideBarToggle);
        }
    }, []);
    return [isSidebarVisible, setIsSidebarVisible];
}