import React from 'react';
import { useDebounce } from '../hooks/Debounce';
import { useToggleSideBar } from '../hooks/ToggleSidebar';
import { SideBarService } from '../services/SidebarService';
import '../styles/Header.css';
export function Header(props) {
    const [isSidebarVisible] = useToggleSideBar();
    const [searchTerm, setSearchTerm] = React.useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    React.useEffect(() => {
        props.onSearch(debouncedSearchTerm);
     }, [debouncedSearchTerm]);
    return (
        <header className="app-header display-flex full-width">
            <div className='sidebar-toggle'>
                <i class={`fa-solid ${isSidebarVisible ? 'fa-arrow-left' : 'fa-bars'} toggle-icon`} onClick={() => SideBarService.toggleSidebar()}></i>
            </div>
            <div className='search-input full-height'>
                <i class="fa fa-search search-icon"></i>
                <input type="text" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </header>
    )
}