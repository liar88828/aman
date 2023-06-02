import { useEffect, useState } from "react";
import { FormContainer } from "../components/FormContainer.jsx";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from "../lib/redux/usersApiSlice.js";
import { setCredentials } from "../lib/redux/authSlice.js";
import { toast } from "react-toastify";
import { Loader } from "./loader.jsx";


export const LoginScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [ login, { isLoading } ] = useLoginMutation()
	const { userInfo } = useSelector((state) => state.auth)

	useEffect(() => {
		if ( userInfo ) {
			navigate('/')
		}
	}, [ navigate, userInfo ])

	const submitHandler = async e => {
		e.preventDefault()
		// console.log(e)
		try {
			const res = await login({ email, password }).unwrap()
			dispatch(setCredentials({ ...res }))
			navigate('/')
			await toast.info(`Success Login `)
		} catch ( e ) {
			// console.log(e?.data?.message || e.error)
			toast.error(e?.data?.message || e.error)
		}
	}
	return (
			<FormContainer>
				<h1>Sign In </h1>
				<Form onSubmit={ submitHandler }>
					{/*-----------Email----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'email' }>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
								type={ 'email' }
								placeholder={ 'Enter Email' }
								value={ email }
								onChange={ e => setEmail(e.target.value) }>
						</Form.Control>
					</Form.Group>
					{/*-----------Password----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'password' }>
						<Form.Label>Password</Form.Label>
						<Form.Control
								type={ 'password' }
								placeholder={ 'Enter Password' }
								value={ password }
								onChange={ e => setPassword(e.target.value) }>
						</Form.Control>
					</Form.Group>

					{ isLoading && <h2><Loader/></h2> }

					<Button type={ 'submit' } variant={ 'primary' } className={ 'mt=3' }>
						Sign In
					</Button>
					<Row className={ 'py-3' }>
						<Col>Ready Have an Account? <Link to={ '/login' }>Login</Link>
						</Col>
					</Row>
				</Form>

			</FormContainer>
	)
}
