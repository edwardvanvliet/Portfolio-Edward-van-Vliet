// JavaScript Document
console.log("hi");



/*******************************************/
/* Navigatiemenu OPENEN met de MENU button */
/*******************************************/

// Variabelen opstellen, die vervolgens worden geselecteerd met de querySelector //
var openMenubutton = document.querySelector("header nav:first-child ul button:first-child");
var deNav = document.querySelector("header nav:nth-of-type(2)");


// Laat het menuknop luisteren naar de clicks en voer dan een functie uit //
openMenubutton.onclick = openNav;
console.log(openMenubutton);

// Voeg in de functie een class toe aan de nav //
function openNav() {
  var deNav = document.querySelector("header nav:nth-of-type(2)");
  deNav.classList.add("open");
  console.log(deNav);
}


/*********************************************/
/* Navigatiemenu SLUITEN met de SLUIT button */
/*********************************************/

// Zoek de sluit button op //
var sluitButton = document.querySelector("header nav:nth-of-type(2) button");

// Laat de sluit button luisteren naar de clicks //
sluitButton.onclick = sluitMenu;

// Verwijder in de functie de class van de nav //
function sluitMenu() {
  var deNav = document.querySelector("header nav:nth-of-type(2)");
  deNav.classList.remove("open");
}



/*******************************************************/
/* Carrousel om door mijn projecten heen te 'bladeren' */
/*******************************************************/

// Carrousel // 
function activateCarrousel(){
  let current_view = 0;
  let count_views = $('.carrousel .screens li').length;
  
  // Methodes
  let switch_view = function(id){
      if(id >= 0  &&  id <= count_views)
          current_view = id;
      update_view();
  };
  let init_pagination = function() {
      for(let i=0; i<count_views; i++) {
          let page = $('<li/>');
          $(page).click(function() {switch_view(i);});
          $('.carrousel .pagination').append(page);
      }
  };
  let update_view = function(){

      // Calculate the current state
      let view0 = current_view;
      let view1 = current_view+1;
      let view2 = current_view+2;
      if(view0 <= 0) view0 = count_views;
      if(view2 > count_views) view2 = 1;
      $('.carrousel .screens li').removeClass('left right');
      $('.carrousel .screens li, .carrousel .pagination li').removeClass('active');
      $('.carrousel .screens li:nth-child('+view1+')').addClass('active');
      $('.carrousel .screens li:nth-child('+view0+')').addClass('left');
      $('.carrousel .screens li:nth-child('+view2+')').addClass('right');
      $('.carrousel .pagination li:nth-child('+view1+')').addClass('active');
  };
  $('.carrousel .screens li').click(function(e){
      let classes = $(e.target).attr('class');
      if(classes.includes('left')) {
          if(current_view==0)
              current_view = count_views-1;
          else
              current_view--;
      }
      else if(classes.includes('right')) {
          if(current_view == (count_views-1))
              current_view = 0;
          else
              current_view++;
      }
      update_view();
  });
  
  init_pagination();
  update_view();
  };



/**********************************************************/
/* "BACK TO TOP"-button onderaan de pagina met JavaScript */
/**********************************************************/
/* Bron "getElementById()": https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById */
/* Bron "if... else-statement": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else */

// Variabelen opstellen, die desbetreffende "id" wordt vervolgens geselecteerd met de querySelector, in dit geval met "getElementById" //
var backtotopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position //
window.onscroll = function() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backtotopButton.style.display = 'block';
  } else {
    backtotopButton.style.display = 'none';
  }
};

// Scroll naar boven als er op de button wordt geklikt //
function scrollToTop() {
  document.body.scrollTop = 0; // Voor Safari
  document.documentElement.scrollTop = 0; // Voor Chrome, Firefox, Internet Explorer (Microsoft Edge?), etc.
}