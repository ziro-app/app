import React, { useState, useRef } from 'react'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { PenIcon } from '../../../Assets/PenIcon/index'
import { PendingIcon } from '../../../Assets/PendingIcon/index'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, warning, field, header, headerAlt, label, input, labelWrapper, pending, validated } from './styles'

export const PersonData = () => {
	const [fname, setFname] = useState('Vitor')
	const inputFname = useRef(null)
	const editFname = () => {
		if (inputFname && inputFname.current)
			inputFname.current.select()
	}
	const updateFname = ({ target: { value } }) => setFname(value)
	return (
		<div style={container}>
			<div style={field} onClick={editFname}>
				<div style={header}>
					<label style={label}>Nome</label>
					<PenIcon size={13} />
				</div>
				<InputText style={input} ref={inputFname} value={fname} onChange={updateFname} />
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
				<div style={headerAlt}>
					<label style={label}>RG</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>preencha p/ liberar pagamentos</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} placeholder='11.22.33.44-55' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={headerAlt}>
					<label style={label}>CPF</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>preencha p/ liberar pagamentos</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} placeholder='111.222.333-44' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={labelWrapper}><label style={label}>Email</label><label style={validated}><SuccessIcon size={9} color={successColor} />validado</label></div>
				<input style={input} disabled={true} value='vitorbarbosa19@gmail.com' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Whatsapp</label>
				<input style={input} disabled={true} value='+55 (11) 95177-1321' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Nova Senha</label>
				<input style={input} disabled={true} value='' />
				<label>&nbsp;</label>
			</div>
		</div>
	)
}