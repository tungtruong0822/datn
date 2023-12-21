console.log('Client-side code running');

const button = document.getElementById('hello');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/projects', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});