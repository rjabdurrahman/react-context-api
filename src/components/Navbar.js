import { useContext } from 'react';
import LoginContext from './LoginContext';

function Navbar() {
    let [name, setNmae] = useContext(LoginContext)
    return (
        <div>
            <p>{name}</p>
            <button disabled={name == 'Changed'} onClick={() => setNmae('Changed')}>Login</button>
        </div>
    );
}

export default Navbar;