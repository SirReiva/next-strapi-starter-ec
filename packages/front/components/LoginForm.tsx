import axios from 'axios';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { Button } from './Button';
import { AuthContext } from '../lib/AuthContext';
import { IAUth } from '../interfaces';
import { useRouter } from 'next/router';

export const LoginForm = () => {
    const [formState, setFormstate] = useState({
        email: 'test@test.com',
        password: 'Test1234',
    });
    const router = useRouter();
    const { setAuth } = useContext(AuthContext);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post<IAUth>('/api/login', {
                ...formState,
            });
            setAuth(res.data);
            router.replace('/').then(() => window.scrollTo(0, 0));
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormstate({
            ...formState,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    return (
        <section className="login_part section_padding ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_text text-center">
                            <div className="login_part_text_iner">
                                <h2>New to our Shop?</h2>
                                <p>
                                    There are advances being made in science and
                                    technology everyday, and a good example of
                                    this is the
                                </p>
                                <Link href="/register">
                                    <a>
                                        <Button>Create an Account</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>
                                    Welcome Back ! <br />
                                    Please Sign in now
                                </h3>
                                <form
                                    className="row contact_form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Username"
                                            value={formState.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formState.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                id="f-option"
                                                name="selector"
                                            />
                                            <label htmlFor="f-option">
                                                Remember me
                                            </label>
                                        </div>
                                        <Button
                                            color="primary"
                                            className="btn_3"
                                            submit
                                        >
                                            Iniciar Sesión
                                        </Button>
                                        <a className="lost_pass" href="#">
                                            forget password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
