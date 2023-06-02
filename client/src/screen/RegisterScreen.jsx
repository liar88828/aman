import {useEffect, useState} from "react";
import {FormContainer} from "../components/FormContainer.jsx";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useRegisterMutation} from "../lib/redux/usersApiSlice.js";
import {setCredentials} from "../lib/redux/authSlice.js";
import {toast} from "react-toastify";
import {Loader} from "./loader.jsx";

export const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState();

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const {userInfo} = useSelector((state) => state.auth)
	const [register, {isLoading}] = useRegisterMutation()

	useEffect(() => {
		if (userInfo) {
			navigate('/')
		}
	}, [navigate, userInfo]);

	const submitHandler = async e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			toast.error('Password is not Match')
		} else {
			try {
				const res = await register({name, email, password}).unwrap()
				dispatch(setCredentials({...res}))
				navigate('/')
			} catch (e) {
				toast.error(e?.data?.message || e.error)
			}
		}
	}
	return (
			<FormContainer>
				<h1>Sign In </h1>
				<Form onSubmit={submitHandler}>
					{/*-----------Name----------*/}
					<Form.Group className={'my-2'} controlId={'name'}>
						<Form.Label>Name</Form.Label>
						<Form.Control
								type={'input'}
								placeholder={'Enter Name'}
								value={name}
								onChange={e => setName(e.target.value)}>
						</Form.Control>
					</Form.Group>
					{/*-----------Email----------*/}
					<Form.Group className={'my-2'} controlId={'email'}>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
								type={'email'}
								placeholder={'Enter Email'}
								value={email}
								onChange={e => setEmail(e.target.value)}>
						</Form.Control>
					</Form.Group>
					{/*-----------Password----------*/}
					<Form.Group className={'my-2'} controlId={'password'}>
						<Form.Label>Password</Form.Label>
						<Form.Control
								type={'password'}
								placeholder={'Enter Password'}
								value={password}
								onChange={e => setPassword(e.target.value)}>
						</Form.Control>
					</Form.Group>
					{/*-----------Password----------*/}
					<Form.Group className={'my-2'} controlId={'confirmPassword'}>
						<Form.Label>Password</Form.Label>
						<Form.Control
								type={'password'}
								placeholder={'Enter confirmPassword'}
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}>
						</Form.Control>
					</Form.Group>

					{isLoading && <Loader/>}

					<Button type={'submit'} variant={'primary'} className={'mt=3'}>
						Sign In
					</Button>
					<Row className={'py-3'}>
						<Col>New Customers <Link to={'/register'}>Register</Link>
						</Col>
					</Row>
				</Form>

			</FormContainer>
	)
}
