import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=6tOYXzh2nzaWSS2_6BL0Jmx-rBQDTWN2KrP2UugZYew'
    
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(response)
}

export default searchImage