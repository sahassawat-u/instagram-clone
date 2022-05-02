import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"

// const posts = [
//     {
//         id:'123',
//         username: 'hhhharyyy',
//         userImg: "https://links.papareact.com/3ke",
//         img: "https://links.papareact.com/3ke",
//         caption: "YEAHH I AM F***ING TOMBOY",
//     }
// ]

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp','desc')), snapshot => {
      setPosts(snapshot.docs);
    });

    // return () => {
    //   unSubscribe();
    // }

  }, [db]);  

  return (
    <div>  
        {posts.map(post => (
            <Post key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            />
        ))}
    </div>
  )
}

export default Posts