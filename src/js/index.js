import axios from 'axios';

async function getResults(query) {
    const key = '85d8929597203e3994570955f828edf2';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error)
    }

}
getResults('tomato');