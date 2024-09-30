import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        })
    }, [])
    return (
        <div className={`header ${scroll ? 'scrolled' : ''}`}>
            <nav className="header-container">
                <div>
                    <h4 className="header-title">Taste</h4>
                    <span className="header-subtitle">Resturant & BBQ</span>
                </div>
                <div className="header-icon">
                    <ShoppingCartOutlined className="header-icon-shopping" />
                    <div className="header-icon-radius">2</div>
                </div>
            </nav>
        </div>
    );
}