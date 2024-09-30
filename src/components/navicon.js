import { HouseDoorFill, QuestionCircleFill, FileEarmarkPersonFill } from "react-bootstrap-icons";
import RecipeIcon from '../assets/RecipeIcon.jsx';
import MenuButton from '../assets/MenuButton.jsx';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export const NavIcon = () => {
    const mainMenue = [
        {
            id: 1,
            href: "home",
            text: "Home",
            icon: < HouseDoorFill />,
        },
        {
            id: 2,
            href: "about",
            text: "About",
            icon: <QuestionCircleFill />,
        },
        {
            id: 3,
            href: "recipe",
            text: "Recipe",
            icon: <RecipeIcon />,
        },
        {
            id: 4,
            href: "contact",
            text: "Contact",
            icon: <FileEarmarkPersonFill />,
        }
    ]
    const [toggle, setToggle] = useState(false);
    return (
        <div className="nav-icon">
            <Container className={toggle ? "scale-1" : "scale-0"}>
                <Row className='align-items-center'>
                    <Col sm={8} md={6} className="nav-icon-bx">
                        {mainMenue.map(main => {
                            return (
                                <div className="nav-icon-bg" key={main.id}>
                                    <a href={`#${main.href}`}>{main.icon}</a>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
            <div className="menu-icon" onClick={() => setToggle(!toggle)}><MenuButton /></div>
        </div>
    );
}