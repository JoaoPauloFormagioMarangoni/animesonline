import { Container, Loading } from "./styles";
import Logo from '../../assets/IconLogo.svg'
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/auth";

export function SignInForm() {
    const { isSignIn, loading } = useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        if (email === '' || password === '') {
            toast.error('Fill in email and password', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                theme: "dark",
                closeOnClick: true,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            try {
                await isSignIn()
                history.push("/")
            } catch {
                toast.error('There was a problem logging in, check email and password', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    theme: "dark",
                    closeOnClick: true,
                    closeButton: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }

    return (
        <Container>
            <ToastContainer />
            <h1>
                <img src={Logo} alt="" />
                Sign In
            </h1>
            <form onSubmit={handleSignIn}>
                <label htmlFor="user">Email</label>
                <input
                    type="email"
                    placeholder="User34@email.com"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    id="user"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="******"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    id="password"
                />
                {loading ? (
                    <Loading></Loading>
                ) : (
                    <button type="submit">Sign In</button>
                )}
            </form>
            <span>It's not registered? <a href="/signUp">Create an account</a></span>
        </Container>
    );
}