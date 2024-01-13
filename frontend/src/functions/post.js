import axios from "axios";
export const createPost=async(
    type,text,images,user,token
)=>{
    try {
        console.log("Request Payload:", { type, text, images, user });
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/createPost`,  // Update this line
          { type, text, images, user },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return data;
    } catch (error) {
        console.error("Error in createPost:", error);
        throw error.response.data.message; 
      }
}