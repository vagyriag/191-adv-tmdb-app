const apiKey = '2c73b0f220a02912d9c2cd39c09588e2';
const apiBase = 'https://api.themoviedb.org/3';

export default {
    searchByTitle: function(search, callback){
        let url = `${apiBase}/search/movie?api_key=${apiKey}&query=${search}`;
        fetch(url)
          .catch(error => {
            console.error(error);
          })
          .then(raw => {
            return raw.json();
          })
          .then(info => {
            callback(info);
          });
    },
    getById: function(id, callback){
      let url = `${apiBase}/movie/${id}?api_key=${apiKey}`;
      fetch(url)
        .catch(error => {
          console.error(error);
        })
        .then(raw => {
          return raw.json();
        })
        .then(info => {
          callback(info);
        });
    }
}