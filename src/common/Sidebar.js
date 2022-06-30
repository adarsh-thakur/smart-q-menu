import React from 'react';
import '../styles/Sidebar.css';
import { useToggleSideBar } from '../hooks/ToggleSidebar';
import { SideBarService } from '../services/SidebarService';
export function SideBar(props) {
    const [isSidebarVisible, setIsSidebarVisible] = useToggleSideBar();
    React.useEffect(() => {
        const onWindowResize = (e) => {
            if (e.target.innerWidth <= 700) {
                SideBarService.toggleSidebar(false);
            }
        }
        window.addEventListener('resize', onWindowResize)
        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, []);
    return <div className={`app-sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
        {props.items.map(item => (
            <div
                className={`app-sidebar-item ${props.selectedItem === item && 'selected'}`}
                onClick={() => props.onSelect(item)}
            >
                {item}
            </div>
        ))}
    </div>
}