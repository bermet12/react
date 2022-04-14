import { useSelector, useDispatch } from "react-redux"
import '../styles/profile.css';
import { profileSelector } from "../redux/reducer/profileSelector/selector";
import { activeSelector } from "../redux/reducer/profileSelector/selector";

export default function Profile() {
    const profileName = useSelector(profileSelector)
    const active = useSelector(activeSelector)
    const dispatch = useDispatch();
    return <>
        <p className="myContacts">
            {profileName}
            {active ? ' в сети' : ' не в сети'}
            <input
                type="checkbox"
                checked={active}
                onChange={() => { dispatch({ type: 'changeActive' }) }} />
        </p>
    </>
}