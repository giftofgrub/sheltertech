import React from 'react'
import Home from '../components/Home'
import Layout from '../components/layouts'



export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  // const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
  // const posts = data.prismic.allPosts.edges;


  return(
    <Layout>
      <Home />
    </Layout>
  )
}
