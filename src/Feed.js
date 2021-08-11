import { Create } from '@material-ui/icons';
import { Image } from '@material-ui/icons';
import { Subscriptions } from '@material-ui/icons';
import { EventNote } from '@material-ui/icons';
import { CalendarViewDay } from '@material-ui/icons';
import React,{useState, useEffect} from 'react'
import './Feed.css';
import { db } from './Firebase';
import InputOption from './InputOption';
import Post from './Post';


function Feed() {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState[[]];
    
    useEffect(()=>{
       db.collection('posts').onSnapshot((snapshot)=>
       setPosts(
           snapshot.docs.map((doc)=>({
               id: doc.id,
               date: doc.date(),
           }))
       ))
    },[]);

    const sendPost =(e=>{
        e.preventDefault();
        db.collection('posts').add(
            {
                name: 'sam',
                description:'test',
                message:''
            }
        )
    });

    return (
        <div className='feed'>
            <div className='input_container'>
                <section className='feed_input'>
                    <Create/>
                    <form>
                        <input value={input} type='text'/>
                        <button type='submit'> Send</button>
                    </form>
                </section>
                <section className='feed-input_options'>
                    <InputOption title='Photo' Icon={Image} color='#70B5F9'/>
                    <InputOption title='Video' Icon={Subscriptions} color='#E7A33E'/>
                    <InputOption title='Event' Icon={EventNote} color='#C0CBCD'/>
                    <InputOption title='Write article' Icon={CalendarViewDay} color='#7FC15E'/>
                </section>
            </div>
           {/* Posts */}
           <Post name="JOHN SAMUEL" description='This is a test' message='Excited to begin my work as an intern!'/>
        </div>
    )
}

export default Feed
