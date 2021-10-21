import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../locales/i18n';
import './Contact.css';

function Contact() {
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const toastifySuccess = () => {
		toast(t('sent_mail'), {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,  
			draggable: false,
			className: 'submit-feedback success',
			toastId: 'notifyToast',
			style: {
				border: '1px solid black',
				borderRadius: 0,
				color: 'black'
			}
		});
	};
  
	const onSubmit = async (data) => {
		const { name, email, message } = data;
		try {
			const templateParams = {
				name,
				email,
				message
			};

			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);
			
			toastifySuccess();
			reset();
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<div className="Wrapper">
			<div className="About">
				<h2>{t('lets_talk')}</h2>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className="Line1">
						<div className="InputWrapper">
							<p>{t('name')}</p>
							<input
								name="name"
								type="text"
								{...register('name', {
									required: { value: true, message: t('error_name_empty') },
									maxLength: {
										value: 30,
										message: t('error_name_length')
									}
								})}
							/>
							{errors.name && <span className='errorMessage'>{errors.name.message}</span>}

						</div>	
						<div className="InputWrapper">
							<p>{t('email')}</p>
							<input
								name="email"
								type="email" 
								{...register('email', {
									required: true,
									pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
								})}
							/>
							{errors.email && (
								<span className='errorMessage'>{t('error_email')}</span>
							)}
						</div>
					</div>

					<div className="Line2">
						<div className="InputWrapper">
							<p>{t('message')}</p>
							<textarea
								name="message"
								{...register('message', {
									required: true
								})}
							/>
							{errors.message && <span className='errorMessage'>{t('error_message')}</span>}
						</div>
					</div>
					<button type="submit">{t('send')}</button>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
}

export default Contact;