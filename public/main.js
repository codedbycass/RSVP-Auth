var going = document.getElementsByClassName("yes");
var notGoing = document.getElementsByClassName("no"); // added this for not going opt, no button class defined in index.ejs
var trash = document.getElementsByClassName("delete");

Array.from(going).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const number = this.parentNode.parentNode.childNodes[3].innerText
        // const going = true
        const going = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'number': number,
            'going': going,
            'attending' : true // added this prop after created a const going var; this didn't send any results to db, so i will continue the not going btn to see if whole thing is needed for it to work
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

//Adding not going option
Array.from(notGoing).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const number = this.parentNode.parentNode.childNodes[3].innerText
    // const notGoing = true
    const going = this.parentNode.parentNode.childNodes[5].innerText
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'number': number,
        'going': going,
        'attending': false // last added prop, now go to routes.js to add conditional statement
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const number = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'number': number
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
