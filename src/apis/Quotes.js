import axios from 'axios';

export const apiGetQuotesAxios = () => {
    axios.get('https://programming-quotes-api.herokuapp.com/quotes/random', { params: { test: 'test' } })
        .then((response) => {
            console.log(response);
            var author = JSON.stringify(response.data.author);
            var quote = JSON.stringify(response.data.en) + ' - ' + author.toString().replace(/"/g, "");
            alert(quote);
        })
}

export default {};