$(document).ready(function(){
  var $form = $('form')

  // $links.on('click', function (e) {
  //   e.preventDefault()
  // }


  $form.on('submit', function(e) {
    console.log($form)
    e.preventDefault() // method of event object to prevent default flow of object
    var $h1 = $('h1')
    var input = $(this).serializeArray()

    input.reduce(function(accu, val) {
      console.log(accu, val)
      $h1.text(accu.value + ', ' + val.value)
    })
  })
})
