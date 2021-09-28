import { Container } from "./styles";
import Logo from '../../assets/IconLogo.svg'
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router";
import api from "../../services/api";


export function SignUpForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let history = useHistory();

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();
        if (userName === '' || email === '' || password === '' || confirmPassword === '') {
            toast.error('Fill all fields', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                theme: "dark",
                closeOnClick: true,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (confirmPassword !== password) {
            toast.error('Password different from confirm password', {
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
                await api.post("/users", { userName, email, password });
                history.push('/signIn')
            } catch {
                toast.error('There was a problem', {
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
                Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor="user">User name</label>
                <input
                  type="text"
                  placeholder="User34"
                  onChange={e => setUserName(e.target.value)}
                  value={userName}
                  id="user" 
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="User34@email.com"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="******"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  id="password"  
                />

                <label htmlFor="confirm">Confirm password</label>
                <input
                  type="password"
                  placeholder="******"
                  onChange={e => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  id="confirm"
                />

                <button type="submit">Sign Up</button>
            </form>
        </Container>
    );
}