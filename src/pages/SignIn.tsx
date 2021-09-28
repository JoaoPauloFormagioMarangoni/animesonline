import { SignInForm } from "../components/SignInForm";
import LoginImg from '../assets/loginUp&loginIn/LoginImg.svg';
import { Container } from "../styles/signIn";
import { Footer } from "../components/Footer";

export default function SignIn() {
    return (
        <>
            <Container>
                <SignInForm />
                <img src={LoginImg} alt="Saitama" />
            </Container>
            <Footer />
        </>
    );
}