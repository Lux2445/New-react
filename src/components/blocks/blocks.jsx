import { Customents } from "./customers/customents"
import {BlogPosts} from "./latest_post/letest"


export function Blocks(){
    
    return(
        <>
            <Customents/>
            <BlogPosts/>
        </>
    )
}