import React, { useState,useEffect, useContext } from 'react';
import { useNavigate, Redirect } from 'react-router-dom';
import UserAPI from '../API/UserAPI';
import { AuthContext } from '../Context/AuthContext';
import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [user, setUser] = useState([]);
	const { user, loading, error, dispatch } = useContext(AuthContext);
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await UserAPI.getAllData();

	// 		setUser(response);
	// 	};

	// 	fetchData();
	// }, []);

	const handleSubmit = async () => {
			const response = await UserAPI.getAllData({email, password});
		// const findUser = user.find((value) => {
		// 	return value.email === email;
		// });
		// if (findUser && findUser.password === password) {
		if (response.meta.statusCode) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
			localStorage.setItem('id_user', response.data.id);
			// navigate("/")
			localStorage.setItem("user", JSON.stringify(response.data));
			alert(response.meta.message)
		} else {
			alert(response.meta.message)
		}

		// if (findUser.password !== password) {
		// 	setErrorPassword(true);
		// 	return;
		// } else {
		// 	setErrorPassword(false);


		// 	localStorage.setItem('name_user', findUser.fullname);

		// 	const action = addSession(localStorage.getItem('id_user'));
		// 	dispatch(action);

		// 	setCheckPush(true);
		// }
	};

	return (
		<div className='page-wrapper'>
			<div className='page-breadcrumb'>
				<div className='row'>
					<div class='login'>
						<div class='heading'>
							<h2>Sign in</h2>
							<form action='#'>
								<div className='input-group input-group-lg'>
									<span className='input-group-addon'>
										<i className='fa fa-user'></i>
									</span>
									<input
										type='text'
										className='form-control'
										placeholder='Email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className='input-group input-group-lg'>
									<span className='input-group-addon'>
										<i className='fa fa-lock'></i>
									</span>
									<input
										type='password'
										className='form-control'
										placeholder='Password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								{!user && <Redirect to={`/`} />}
								<button
									type='button'
									className='float'
									onClick={handleSubmit}>
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
