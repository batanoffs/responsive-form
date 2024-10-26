import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import data from '../users.json';

type initialStateProps = { user: string; password: string };

export const useForm = (initialState: initialStateProps) => {
	const [values, setValues] = useState(initialState);
	const navigate = useNavigate();

	const handleEmptyFields = () => {
		const button = document.querySelector('.login-button');

		if (values.user !== '' && values.password !== '') {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	};

	const changeHandler = (e) => {
		const target = e.currentTarget.name;
		const value = e.currentTarget.value;

		if (!target) throw new Error('target is null');

		setValues((prev) => {
			if (target === 'user') {
				return { ...prev, user: value };
			} else {
				return { ...prev, password: value };
			}
		});

		handleEmptyFields();
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const formElement = e.target;
		const form = new FormData(formElement);

		if (!form) throw new Error('Form data is empty');

		const formEntries = Object.fromEntries(form);

		const { user, password } = formEntries;

		const isValidUser = data.users.find((u) => u.user === user);

		if (!isValidUser) {
			alert('User does not exist');
			return;
		}

		if (isValidUser.password !== password) {
			alert('Wrong password');
			return;
		}
		//reset state
		setValues({ user: '', password: '' });
		navigate('/table');
	};

	return {
		values,
		changeHandler,
		onSubmitHandler,
	};
};
