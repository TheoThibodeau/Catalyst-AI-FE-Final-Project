const handlePost = (e) => {
    e.preventDefault();
    axios
    .post('https://catalyst-x226.onrender.com/api/definition/generate/', {
        word: word,
    })
    .then((response) => {
        console.log(response.data);
        setDefinition(response.data.definition); 
    })
    .get(`https://catalyst-x226.onrender.com/api/definition/${defineId}`), {
    .then((response) => {
        setDefineId(response.data.word)
        setWord(response.data.word);
        setDefinition(response.data.definition);
    })}
    .catch((error) => console.error(error));
}