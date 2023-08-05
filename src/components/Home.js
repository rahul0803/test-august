import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../redux/actions/ActionCreators'
import { useNavigate } from 'react-router-dom'
import { selectItem } from '../redux/actions/ItemActionCreators'


const Home = () => {
    const dispatch = useDispatch()
    const state_data = useSelector(state => state.data.data)
    const state_loading = useSelector(state => state.data.loading)
    const state_error = useSelector(state => state.data.error)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    function handleClick(item){
    dispatch(selectItem(item))
    localStorage.setItem('item', JSON.stringify(item))
    // console.log(item)
    navigate('/item/:id')
    }

    return (
        <div className='home'>

       <div className='heading'>
        <h1 className='h1'> Social Media For Travellers </h1>
        <input className='input' type="text" placeholder='Search here...'/>
        </div>

        {state_loading && <p> Loading....</p>}
        {state_error && <p> Error: {state_error} </p>}
        
        {
            state_data && (
            state_data.map((item)=>(
                <div key={item.id} style={{width: '451px', height: '401px', marginLeft: '25px'}} onClick={()=>handleClick(item)}>
                <img src={`https://picsum.photos/200?random=${item.id}`} alt={item.title} style={{width: '401px', height: '279px'}}/>
                 <h3> {item.title.slice(0, 20)}... </h3>
                 <p> {item.body.slice(0, 100)} <span style={{color: 'red'}}> Read more... </span> </p>
                </div>
            ))
            )
        }

        </div>
    )
}

export default Home
