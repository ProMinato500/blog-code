import React from 'react'
import styles from "../styles/Blog.module.css";
import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json();})
      .then((parsed)=>{
        setBlogs(parsed)
      })
    }, []);
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem)=>{
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p>
                {blogItem.content.substr(0,140)}...
              </p>
            </div>
          );
        })}
        
      </main>
    </div>
  );
}

export default Blog