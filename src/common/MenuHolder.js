import '../styles/MenuHolder.css';
import { useToggleSideBar } from '../hooks/ToggleSidebar';
export function MenuHolder(props) {
    const [isSidebarVisible, setIsSidebarVisible] = useToggleSideBar();
    return (
        <div className={`app-menu-holder display-flex flex-row flex-wrap ${isSidebarVisible && 'side-bar-visible'}`}
            style={{
                width :  !isSidebarVisible && '100%'
            }}
        >
            {props.items?.map(item => (
                <div
                    key={item.foodid}
                    className={`menu-item display-flex align-items-center justify-content-center ${item.outofstock ? 'out-of-stock' : 'in-stock'} `}
                    onClick={() => props.onItemClicked(item.foodid)}
                >
                    {item.foodname}
                </div>
            ))}
        </div>
    )
}