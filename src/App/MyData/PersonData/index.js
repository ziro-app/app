import React from 'react'
import { container, field, label, input } from './styles'

export const PersonData = () => {
	return (
		<div style={container}>
			<div style={field}>
				<label style={label}>Nome</label>
				<input style={input} value='Vitor' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Sobrenome</label>
				<input style={input} value='Barbosa' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>RG</label>
				<input style={input} value='11.22.33.44-55' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>CPF</label>
				<input style={input} value='111.222.333-44' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Email</label>
				<input style={input} value='vitorbarbosa19@gmail.com' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Whatsapp</label>
				<input style={input} value='+55 (11) 95177-1321' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Nova Senha</label>
				<input style={input} value='' />
				<label>&nbsp;</label>
			</div>
		</div>
	)
}