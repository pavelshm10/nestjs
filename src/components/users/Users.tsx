// import axios from 'axios';
import React, { useEffect } from 'react'
// const MemoizedUsersComponent = useMemo(() => <Users />, []);

const Users = () => {
    // const [data, setData] = useState(null);
    // console.log("dddd");
    // const callbackify=useCallback(() => {
    // console.log("inssss")
        
    //     // const fetchData = async () => {
    //     //     try {
    //     //         const response = await axios.get('http://localhost:3001/api/data');
    //     //         setData(response.data);
    //     //         return
    //     //         console.log("res ", response.data);
    //     //     } catch (error) {
    //     //         console.error('Error fetching data:', error);
    //     //     }
    //     // };
    //     // fetchData();
    // }, []);

    useEffect(()=>{
        // callbackify();
    },[])
    return (
        <div>users</div>
    )
}

export default Users