import Hero from "./Hero"
import AboutUs from "./AboutUs"
import Section3 from "./Section3"
import Services from "./Services"
import Testimonial from "./Testimonials"
import Case from "./Case"
import Team from "./Team"
import NewsLetter from "./NewsLetter"
import Clients from "./Clients"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import { useEffect, useRef } from "react"

export default function Home(){
    const serviceref=useRef(null);
    const clientref=useRef(null);
    const aboutref=useRef(null);
    const contactref=useRef(null);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            let element;
            switch (hash) {
                case 'service':
                    element = serviceref.current;
                    break;
                case 'client':
                    element = clientref.current;
                    break;
                case 'about':
                    element = aboutref.current;
                    break;
                case 'contact':
                    element = contactref.current;
                    break;
                default:
                    break;
            }
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [serviceref, clientref, aboutref, contactref]);

    return (
        <>
            <Hero serviceref={serviceref} clientref={clientref} aboutref={aboutref} contactref={contactref}/>
            <div ref={aboutref}>
            <AboutUs/>
            </div>
            <Section3/>
            <div ref={serviceref}>
            <Services />
            </div>
            <Testimonial/>
            <Case/>
            <Team/>
            <NewsLetter/>
            <div ref={clientref}>
            <Clients/>
            </div>
            <div ref={contactref}>
            <ContactUs/>
            </div>
            <Footer/>
        </>
    )
}