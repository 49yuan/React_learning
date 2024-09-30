import { Facebook, Instagram, Twitter, Telephone, Envelope, GeoAlt } from "react-bootstrap-icons";

export const Footer = () => {
    const follwicons = [
        {
            app: "facebook",
            icon: <Facebook />,
        },
        {
            app: "instagram",
            icon: <Instagram />,
        },
        {
            app: "twitter",
            icon: <Twitter />,
        }
    ]
    const mainmenus = [
        { id: 1, text: "Home", },
        { id: 2, text: "About", },
        { id: 3, text: "Recipe", },
        { id: 4, text: "Contact", }
    ]
    const explores = [
        { id: 1, text: "Drinks", },
        { id: 2, text: "Burger", },
        { id: 3, text: "Salad", },
        { id: 4, text: "Breakfast", },
        { id: 5, text: "Dinner", }
    ]
    const contacts = [
        {
            id: "phone",
            text: "+959-883-271-929",
            icon: <Telephone />,
        },
        {
            id: "mailbox",
            text: "abee2002@gmail.com",
            icon: <Envelope />,
        },
        {
            id: "adress",
            text: "16 Road TharkayTha,Yangon",
            icon: <GeoAlt />,
        }
    ]
    return (
        <div className="footer">
            <div className="foodzone">
                <div className="title">Foodzone</div>
                <div>lorem ipsum dolor sit, amet consecteturadipisicing elit. Eum asperiores, laboriosamqui labore eveniet ut iusto culpa animiofficiis quo.</div>
                <div className="follow-us">Follow Us<span className="line"></span>
                    {follwicons.map((follow, index) => {
                        return (
                            <div className="footer-icon" key={index}>
                                {follow.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="row-2">
                <div className="main-menu">
                    <div className="title">Main Menu</div>
                    <ul>
                        {mainmenus.map(main => {
                            return (
                                <li key={main.id}>{main.text}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="explore">
                    <div className="title">Explore</div>
                    <ul>
                        {explores.map(explore => {
                            return (
                                <li key={explore.id}>{explore.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="fcontact">
                <div className="title">Contact</div>
                <ul>
                    {contacts.map((contact, index) => {
                        return (
                            <li key={index}>
                                <div className="footer-icon">
                                    {contact.icon}
                                </div>
                                <span>{contact.text}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}