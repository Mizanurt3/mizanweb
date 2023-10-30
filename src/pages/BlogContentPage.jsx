import React from 'react'
import { BlogContent} from '../components'
export function BlogContentPage({blogs}) {
    
    console.log(blogs)

    return (
        <>
        
                  
                <BlogContent blogs={blogs}/>   
        </>
    )
}




