import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(response)
}

export default searchImage