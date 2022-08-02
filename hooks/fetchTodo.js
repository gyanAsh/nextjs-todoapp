import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const fetchTodo = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [todos, setTodos] = useState({});
    
    const { currentUser } = useAuth();

    useEffect( () => {

        const fetch=async() => {
            try {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTodos(docSnap.data().todos);
            } else {
                setTodos({});
            }

            } catch (error) {
                setError('Failed to load todos');
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetch();
        
    }, []);

    return { loading, error, todos, setTodos }

}

export default fetchTodo;