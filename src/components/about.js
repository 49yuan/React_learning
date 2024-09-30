import { ArrowRightShort } from "react-bootstrap-icons";
import food from '../assets/hero3.png';
import chef from '../assets/chef.jpg';

export const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="food"><img src={food} alt="food-img" /></div>
                <div className="about-text">
                    <div className="text-title">Best food in town awaits you</div>
                    <div className="text-explain">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis id, iste accusantium velit ex voluptatem soluta delectus impedit, aut, aliquam facereexercitationem? Accusamus inventore possimus quasi labore, laudantiumearum corporis.</div>
                    <div className="btn">
                        <a href="#">Explore more</a>
                        <ArrowRightShort />
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-text">
                    <div className="text-title">Our team of registered nurses andskilled healthcare professionalsprovide in-home nursing.</div>
                    <div className="text-explain">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati architectoaperiam at eius quisquam assumenda sequi voluptas eaque dolorum iste utsunt, doloremque eligendi, exercitationem voluptatibus earum debitis illoconsectetur!</div>
                </div>
                <div className="chef"><img src={chef} alt="chef-img" /></div>
            </section>
        </div>
    );
}