export class SideBarService {
    static isSidebarVisible = true;
    static toggleSidebar(flag = null) {
        if (flag === null) flag = !this.isSidebarVisible;;
        this.isSidebarVisible = flag;
        window.dispatchEvent(new CustomEvent(COMMON_EVENTS.SIDE_BAR_TOGGLED, { detail: this.isSidebarVisible }));
    }

}
export const COMMON_EVENTS = {
    SIDE_BAR_TOGGLED: 'sideBarToggled'
}