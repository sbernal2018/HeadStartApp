//carousel scripts 


$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});





  //navbar scripts 

function openNav() {
  document.getElementById("mySidenav").style.width = "65%";
  }

  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }

  window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("rebar");
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }




