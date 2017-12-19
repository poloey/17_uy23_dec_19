var button = document.querySelector('button')
var p = document.querySelector('p')

button.addEventListener('click', function () {
  
  // if (p.classList.contains('arif')) {
  //   p.classList.remove('arif')
  // }else {
  //   p.classList.add('arif')
  // }

  if (p.className === 'arif') {
    p.className = ''
  }else {
    p.className = 'arif'
  }
  

});