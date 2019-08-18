import React from 'react'
import { PenIcon } from '../../../Assets/PenIcon/index'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, field, header, label, input, labelWrapper, validated } from './styles'

export const PersonData = () => {
	return (
		<div style={container}>
			<div style={field}>
				<div style={header}>
					<label style={label}>Nome</label>
					<PenIcon size={13} />
				</div>
				<input style={input} value='Vitor' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={header}>
					<label style={label}>Sobrenome</label>
					<PenIcon size={13} />
				</div>
				<input style={input} value='Barbosa' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={header}>
					<label style={label}>RG</label>
					<PenIcon size={13} />
				</div>
				<input style={input} value='11.22.33.44-55' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={header}>
					<label style={label}>CPF</label>
					<PenIcon size={13} />
				</div>
				<input style={input} value='111.222.333-44' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={labelWrapper}><label style={label}>Email</label><label style={validated}><SuccessIcon size={9} color={successColor} />validado</label></div>
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