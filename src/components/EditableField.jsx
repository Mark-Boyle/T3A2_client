import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from "../contexts/AuthProvider";
export default function EditableField(props) {
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState(props.value)
    const [auth, setAuth] = useContext(AuthContext);

    useEffect(() => {
		setData(props.value);
	}, [props.value])
    
    
    const toggleEditable = () => {
        setEditable(!editable)
    }

    const changeInput = (event) => {
        setData(event.target.value)
    }

    if(editable){
        return(
            <div>
                <input type="text" value={data} onChange={changeInput}/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8F3417" className="bi bi-save" id="save-icon" viewBox="0 0 16 16" onClick={() => {
					    props.updateData(props.attribute, data)
					    toggleEditable()
					    }}>
                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                    </svg>
            </div>
        )
    }
    return (
        <div className="text-field">
            {props.value}
              {(auth.userId == props.bookUserId &&
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8F3417"  viewBox="0 0 16 16" onClick={toggleEditable} className="edit-icon" >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>)}
        </div>
    )
}
