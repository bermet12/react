import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFriends } from '../redux/reducer/friendsReducer';
import { friendsSelector } from '../redux/reducer/selector/friendsSelector';
import { loadingSelector } from '../redux/reducer/selector/friendsSelector';
import '../styles/friends.css'

function Friends() {
    const dispatch = useDispatch();
    const friends = useSelector(friendsSelector)
    const loading = useSelector(loadingSelector)
    const error = useSelector(state => friends.error)

    useEffect(() => {
        dispatch(loadFriends())
    }, [])

    const handleError = () => {
        dispatch(loadFriends())
    }
    if (loading) {
        return (
            <div>
                <h2>Идет загрузка...</h2>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h2>Произошла ошибка. Повторите попытку </h2>
                <button onClick={handleError}>Повторить попытку</button>
            </div>
        )
    }
    return (
        <div className="App">
            <h1>Ваши друзья!</h1>
            <div className='flex'>
                {friends.length &&
                    friends.map((user) => (
                        <div key={user.id}>
                            <p>
                                <strong>{user.first_name}</strong>
                            </p>
                            <p>{user.email}</p>
                            <img src={user.avatar} alt="user" />
                        </div>
                    ))}
            </div>
        </div>
    )
};
export default Friends;