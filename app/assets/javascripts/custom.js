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

// Carroussel

$(function(){
  setInterval(function(){
     $(".slideshow ul").animate({marginLeft:-350},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
     })
  }, 2500);
});
