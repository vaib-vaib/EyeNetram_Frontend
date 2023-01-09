import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ContactPage() {
  const styles = {
    contactimg: {
        position: "absolute",
        left: "200px",
        top: "30px",
        borderRadius : "8px", 
        width: "25%",
        height: "500px",
    },
    head: {
      verticalAlign: "text-top",
    },
  };
  return (
    <Layout>
      <Article>
        <ArticleContent style={styles.head} title="Contact">
          <p>Feel free to contact the following email ids</p>
          <ol>  
              <li>mitali.deshpande@cumminscollege.in</li>  
              <li>vaibhavi.ambarkar@cumminscollege.in</li>  
              <li>siddhi.bhutada@cumminscollege.in</li>  
              <li>diksha.sharma@cumminscollege.in</li>  
          </ol>  
        </ArticleContent>

        <ArticleMedia>
        <div style={styles.contactimg}>
          <img src="../assets/images/contact.png" alt="Lorem Picsum" />
          </div>
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
