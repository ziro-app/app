import React, { useState, useRef } from 'react'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { PenIcon } from '../../../Assets/PenIcon/index'
import { PendingIcon } from '../../../Assets/PendingIcon/index'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, warning, field, header, headerAlt, label, input, labelWrapper, pending, validated } from './styles'

export const PersonData = () => {
	const [fname, setFname] = useState('Vitor')
	const [disableFname, setDisableFname] = useState(true)
	const inputFname = useRef(null)
	const editFname = () => {
		setDisableFname(false)
		if (inputFname && inputFname.current)
			inputFname.current.select()
	}
	const updateFname = ({ target: { value } }) => {
		setFname(value)
	}
	/* --- */
	const [disableLname, setDisableLname] = useState(true)
	const [disableRG, setDisableRG] = useState(true)
	const [disableCPF, setDisableCPF] = useState(true)
	return (
		<div style={container}>
			<label style={warning}><PendingIcon size={13} color={'#E5CD00'} strokeWidth={3} />corrija pendências para liberar pagamentos</label>
			<div style={field}>
				<div style={header} onClick={editFname}>
					<label style={label}>Nome</label>
					<PenIcon size={13} />
				</div>
				<InputText style={input} ref={inputFname} disabled={disableFname} value={fname} onChange={updateFname} />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={header} onClick={() => setDisableLname(false)}>
					<label style={label}>Sobrenome</label>
					<PenIcon size={13} />
				</div>
				<input style={input} readonly={disableLname} value='Barbosa' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={headerAlt} onClick={() => setDisableRG(false)}>
					<label style={label}>RG</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>pendente</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} readonly={disableRG} placeholder='11.22.33.44-55' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={headerAlt} onClick={() => setDisableCPF(false)}>
					<label style={label}>CPF</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>pendente</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} readonly={disableCPF} placeholder='111.222.333-44' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={labelWrapper}><label style={label}>Email</label><label style={validated}><SuccessIcon size={9} color={successColor} />validado</label></div>
				<input style={input} readonly={true} value='vitorbarbosa19@gmail.com' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Whatsapp</label>
				<input style={input} readonly={true} value='+55 (11) 95177-1321' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Nova Senha</label>
				<input style={input} readonly={true} value='' />
				<label>&nbsp;</label>
			</div>
		</div>
	)
}