$(document).ready(function(){
    $("#presentation").click(function()
    {
        $("#presentation_contenu").fadeIn();
        $("#menu_contenu").hide();
        $("#map_contenu").hide();
    });
    $("#menu").click(function()
    {
        $("#presentation_contenu").hide();
        $("#menu_contenu").fadeIn();
        $("#map_contenu").hide();
    });
    $("#map").click(function()
    {
        $("#presentation_contenu").hide();
        $("#menu_contenu").hide();
        $("#map_contenu").fadeIn();
    });
});

// Petit Carroussel

$(function(){
  setInterval(function(){
     $(".slideshow ul").animate({marginLeft:-350},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
     })
     // Timer vitesse de rotation
  }, 2500);
});


// Grand Carroussel


$(document).ready(function () {
    // Timer vitesse de rotation
    var speed = 2800;

    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id du bouton précédent
    var next = 'next'; //id du bouton next
    slides.width(item_width); //définit les slides à la bonne largeur de pixel
    container.parent().width(item_width);
    container.width(slides.length * item_width);
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();


    //L'utilisateur clique sur le bouton Précédent

    $('#buttons a').click(function (e) {
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }

        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        return false;

    });

    // Si la sourie est sur la photo, cela stop la rotation auto. Si elle la quitte elle se relance.
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });


    function resetSlides() {
        container.css({
            'left': -1 * item_width
        });
    }

});
// La fonction qui appelle la photo d'après.
// Le Timer va l'appel pour lancer la rotation

function rotate() {
    $('#next').click();
}
