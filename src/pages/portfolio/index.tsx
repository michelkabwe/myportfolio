import React, { useState, useEffect } from 'react'
import styles from '../../styles/Portfolio.module.css'
import axios from 'axios'


const Index: React.FC= () => {
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState<any>([])

   //.get(`https://africanent.se/wp-json/wp/v2/posts/posts/${postId}`)
   //  .get('https://africanent.se/wp-json/wp/v2/posts/')
   //.get(`https://africanent.se/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date`)



  useEffect(() => {
    axios
      .get(`https://africanent.se/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date`)
      .then((res) => {
        setPosts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
 
  return (
    <div className={styles.portfolio_wrapper}>
      <h1>portfolio page</h1>
      { posts ? (
          <ul>
              {posts.map((item) => {
                  console.log(
                  item
                  ,'img')
                  return (
                    (
                        <li key={item.id} style={{color:'red' ,height: 'auto', width: '50%'}}>
                            {item.title.rendered}
                            {item.date}
                            {item.featured_media_url}

                            <img src={item.jetpack_featured_media_url} alt="Featured image" style={{color:'red' ,height: 'auto', width: '50%'}}/>
                           {/*  {item.title.content.rendered}
                           {item.featured_media_url}*/}

                        
                        </li>
                    )
                  )
              })}
          </ul>
      ): (
          <p>Loading...</p>
      )}


   
    </div>
  )
}

export default Index
