import {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

    let a = axios.create({baseURL: 'http://localhost:8000'})

    const [id, setID] = useState('');
    const [user,setUser] = useState(null);

    const getStudent = async () => {
        console.log(id);
        let s = await a.get(`/students/${id}`);
        console.log(s.data);
        setUser(s.data);
    }

    const Form = () => {
        return (
            <>            
            <input type="text" onChange={(e) => setID(e.target.value)} />
            <button onClick={getStudent}>Grab Student</button>
            </>
        )
    }

    const UserProfile = (id) => {

        const updateGif = () => {
            let newURL = prompt('What url?');

            let change = {url: newURL};
            a.put(`/students/${id}`,change);
        }

        const showGifs = user.gifs?.map(g => <img onClick={() => updateGif(g.id)} key={g.id} src={g.url}/>)

        return (
            <div>
                {user.name} has {user.gifs.length} Gifs:
                {showGifs}
            </div>
        )
    }

    return (
        <div className="App-header">
            App For Fullstack

            { user ? <UserProfile/> : <Form/> }

        </div>
    );
}

export default App;
