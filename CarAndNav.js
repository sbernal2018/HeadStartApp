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


//function for the right price


function right_price(){

  if(document.getElementById('price1').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/individual-retirement-plan-initial-fee-ra18/","_system")


  }

  else if(document.getElementById('price2').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/individual-retirement-plan-ira-monthly-fee-ra28/","_system")

  }

  else if(document.getElementById('price3').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/401k-initial-fee-rb18/","_system")

  }

  else if(document.getElementById('price4').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/401k-monthly-fee-rb28/","_system")

  }

  else if(document.getElementById('price5').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/annuity-initial-fee-rc18/","_system")

  }

  else if(document.getElementById('price6').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/annuity-monthly-fee-rc28/","_system")

  }

  else if(document.getElementById('price7').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/financial-literacy-credit-debit-firm-fee-wa18/","_system")

  }

  else if(document.getElementById('price8').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/https://portal.veinternational.org/buybuttons/us01004/btn/financial-literacy-credit-debit-monthly-fee-wa28/","_system")

  }

  else if(document.getElementById('price9').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/emergency-savings-firm-fee-wb18/","_system")

  }

  else if(document.getElementById('price10').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/emergency-savings-individual-fee-wa28/","_system")

  }

  else if(document.getElementById('price11').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/college-loans-101-firm-fee-wf18/","_system")

  }

  else if(document.getElementById('price12').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/college-loans-101-individual-fee-wf28/","_system")

  }

  else if(document.getElementById('price13').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/future-savings-firm-fee-wc18/","_system")

  }

  else if(document.getElementById('price14').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/future-savings-individual-fee-wc28/","_system")

  }

  else if(document.getElementById('price15').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/vacation-planning-firm-fee-wd18/","_system")

  }

  else if(document.getElementById('price16').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/vacation-planning-individual-fee-wd28/","_system")

  }

  else if(document.getElementById('price17').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/insurance-101-firm-fee-wh18/","_system")

  }

  else if(document.getElementById('price18').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/insurance-101-individual-fee-wh28/","_system")

  }

  else if(document.getElementById('price19').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/financial-advisory-firm-fee-sa18/","_system")

  }

  else if(document.getElementById('price20').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/mutual-funds-initial-fee-sb18/","_system")

  }

  else if(document.getElementById('price21').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/529-initial-fee-sc18/","_system")

  }

  else if(document.getElementById('price22').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/premium-package-all-workshops-pa18/","_system")

  }

  else if(document.getElementById('price23').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/premium-package-individual-fee-pa18/","_system")

  }

  else if(document.getElementById('price24').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/student-package-pb18/","_system")

  }

  else if(document.getElementById('price25').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/insurance-package-pc18/","_system")

  }

  else if(document.getElementById('price26').checked) {
    window.open("https://portal.veinternational.org/buybuttons/us01004/btn/firm-package-pd18/","_system")

  }



}




