import react from "react";

export async function deletePost(token, postID){
    try{
        const response = await fetch("https://strangers-things.herokuapp.com/api/2109-lsu-rm-web-ft//posts/"`${postID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            }
        })
        const result = await response.json();
        return result.success
    }catch(error) {
        console.error(error)
    }
}

export default deletePost