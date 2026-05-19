import axios from 'axios'

export interface CatPost {
   id: string
   url: string
}

export const fetchCatPosts = async (
   limit: number
): Promise<CatPost[]> => {

   const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
   )

   return response.data
}