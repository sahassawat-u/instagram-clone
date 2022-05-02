import Post from "./Post"

const posts = [
    {
        id:'123',
        username: 'hhhharyyy',
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "YEAHH I AM F***ING TOMBOY",
    }
]

function Posts() {
  return (
    <div>  
        {posts.map(post => (
            <Post key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
        

            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
    </div>
  )
}

export default Posts