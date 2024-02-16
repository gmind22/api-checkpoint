import axios from 'axios'
import { useEffect, useState } from "react"
import User from './User'

export default function UserList() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
    }, [])
    
    return (
        <div className='user__list'>
        {
            data.map(user => {
                return <User key={user.id} name={user.name} username={user.username} email={user.email} website={user.website} image={images[user.id - 1]}/>
            })
        }
        </div>
    )
}

const images = [
    'pic-1.jpg',
    'pic-2.jpg',
    'pic-3.jpg',
    'pic-4.jpg',
    'pic-5.jpg',
    'pic-6.jpg',
    'pic-7.jpg',
    'pic-8.jpg',
    'pic-9.jpg',
    'pic-10.jpg'
]