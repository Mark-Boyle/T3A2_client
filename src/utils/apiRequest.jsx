export const fetchData = async (url) => {
    const response = await fetch(url, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })
    
    const data = await response.json()
    return data
}

// export const postData = async (url, body) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })
//     const data = await response.json();
//     return data
// }

export const postData = async (event) => {
    const formData = new FormData(event.target)
    console.log(formData)
    const response = await fetch(process.env.REACT_APP_API_URL + '/books', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Accept": 'application/json'
        },
        body: formData
    })
    const data = await response.json();
    return data
}

export const deleteRequest = async (url) => {
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    
}

export const updateRequest = async (url, body, callBack) => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    if(callBack) {callBack()} 
    return data
}