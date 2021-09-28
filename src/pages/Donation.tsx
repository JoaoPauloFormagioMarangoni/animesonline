import { Footer } from "../components/Footer";
import { HeaderHome } from "../components/HeaderHome";
import { PayPalComponent } from "../components/PayPalComponent";
import { ContainerDonation, Container } from "../styles/donation.style";

import Particles from "react-particles-js";

import iconLogo from '../assets/IconLogo.svg';

export default function Donation() {
    return (
        <Container>
            <HeaderHome />
            <ContainerDonation>
                <div>
                    <div>
                        <div>
                            <h1>
                                <img src={iconLogo} alt="" />
                                Donation
                                <img src={iconLogo} alt="" />
                            </h1>
                            <p>
                                Texto de donation
                                fsókpnm gf´skpngm´spoekmf´ spoemf´spoefm´spogmápk a
                                fsókpnm gf´skpngm´spoekmf´spoemf´spoefm´spogmápk a
                                fsókpnm gf´skpngm´ spoekmf´spoemf´spoefm´spogmápk a
                                fsókpnm gf´skpng m´spoekmf´ spoemf´spoefm´spogmápk a
                                fsókpnm gf´skpngm´spoekmf´spoemf´spoe fm´spogmápk a
                                fsókpnm gf´skpng m´spoekmf´spoemf´spoefm´spogmápk a
                            </p>
                        </div>
                        <PayPalComponent />
                    </div>
                </div>
            </ContainerDonation>
            <Particles className="particles" params={{
                particles: {
                    number: {
                        value: 70,
                        density: {
                            enable: true,
                            value_area: 868.0624057955
                        }
                    },
                    color: {
                        value: "#ff0000"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            // speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }} />
            <Footer />
        </Container>

    );
}