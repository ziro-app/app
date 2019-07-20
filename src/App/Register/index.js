import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'wouter'
import { useForm } from './utils/useForm'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { CnpjIcon } from '../../Assets/CnpjIcon/index'
import { container, welcome, subtitle, dot, instructions, text, cnae, form, wrapper, labelCnpj, inputCnpj } from './styles'

export const Register = () => {
	const AnimationSettings = {
		transition: { duration: 0.5 },
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, x: -200 }
	}
	const { cnpj, handleCnpj, submitForm } = useForm()
	return (
		<motion.div style={container} {...AnimationSettings}>
			<h1 style={welcome}><label style={subtitle}>Passo 1</label><label style={dot}>.</label><br/>Valide seu CNPJ</h1>
			<form style={form} onSubmit={submitForm}>
				<div style={wrapper}>
					<label style={labelCnpj} htmlFor='cnpj'><CnpjIcon size={13} />CNPJ<Errors message={false && 'Mínimo 13 caracteres'} /></label>
					<input style={inputCnpj} onChange={handleCnpj} value={cnpj} placeholder='11.222.333/0001-44' type='text' name='cnpj' id='cnpj' />
				</div>
				<div style={instructions}>
					<p style={text}>Seu CNPJ deve conter como atividade primária ou secundária:</p>
					<p style={text}><label style={cnae}>CNAE 4781-4/00</label><br/>Comércio varejista de artigos do vestuário e acessórios</p>
				</div>
				<Submit />
			</form>
		</motion.div>
	)
}