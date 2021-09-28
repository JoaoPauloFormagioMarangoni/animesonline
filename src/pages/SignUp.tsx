import LoginUpImg from '../assets/loginUp&loginIn/LoginUpImg.svg';
import { Container } from "../styles/signIn";
import { SignUpForm } from "../components/SignUpForm";
import { Footer } from '../components/Footer';

export default function SignUp() {
    return (
        <>
            <Container>
                <SignUpForm />
                <img src={LoginUpImg} alt="Toaru Kagaku no Railgun" />
            </Container>
            <Footer />
        </>
    );
}