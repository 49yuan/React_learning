import { ArrowRightShort } from "react-bootstrap-icons";
import HeroIcon1 from '../assets/HeroIcon1.jsx';
import HeroIcon2 from '../assets/HeroIcon2.jsx';
import HeroIcon3 from '../assets/HeroIcon3.jsx';
import HeroIcon4 from '../assets/HeroIcon4.jsx';
import hero from '../assets/hero.png';

export const Home = () => {
    const heroIcons = [
        {
            id: 1,
            href: "home",
            text: "Home",
            icon: < HeroIcon1 />,
        },
        {
            id: 2,
            href: "home",
            text: "Home",
            icon: < HeroIcon2 />,
        },
        {
            id: 3,
            href: "home",
            text: "Home",
            icon: < HeroIcon3 />,
        },
        {
            id: 4,
            href: "home",
            text: "Home",
            icon: < HeroIcon4 />,
        }]
    return (
        <section className="home" id="home">
            <div className="hometitle">
                <div>
                    Delicious <br /> Food is Waiting <br /> For you
                </div>
                <div className="btn">
                    <a href="#">View Menu</a>
                    <ArrowRightShort />
                </div>
                <div className="icon-bx">
                    {heroIcons.map((heroIcon, index) => {
                        return <div className="heroicon" key={index}>{heroIcon.icon}</div>
                    })}
                </div>
            </div>
            <div className="hero"><img src={hero} alt="hero-img" /></div>
        </section>
    );
}