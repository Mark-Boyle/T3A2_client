export const fetchData = async (url) => {
    const response = await fetch(url, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })
    
    const data = await response.json()
    return data
}
