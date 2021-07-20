import React, {useState, useEffect} from 'react'

export default function EditableField(props) {
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState(props.value)


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
                <button onClick={() => {
					props.updateData(props.attribute, data)
					toggleEditable()
					}}>Save</button>
            </div>
        )
    }
    return (
        <div>
            {props.value}
            <button onClick={toggleEditable}>Toggle</button>
        </div>
    )
}
