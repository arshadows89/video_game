$(function(){
  $("#slides").slidesjs({

    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
});
$(function(){
  $("#slides").slidesjs({
    pagination: {
      active: false,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});
$(function(){
  $("#slides").slidesjs({
    width: 1200,
    height: 900
  });
});

$(document).ready(
  function(){
  $("#glad_icon").click(
    function() {
      $('.glad_img').show();
      $('#glad_vid').show();
  };
    function(){
  $("#crusader_icon").click(
    function() {
      $('.crusader_img').show();
      $('#crusader_vid').show();
  };
    function(){
  $("#monk_icon").click(
    function() {
      $('.monk_img').show();
      $('#monk_vid').show();
  };
    function(){
  $("#wizz_icon").click(
    function() {
      $('.wizz_img').show();
      $('#wizz_vid').show();
  };
  $("#dh_icon").click(
    function() {
      $('.dh_img').show();
      $('#dh_vid').show();
  };
   $("#witch_icon").click(
    function() {
      $('.witch_img').show();
      $('#witch_vid').show();
  };
  }
)




  // demon hunter icon also needs to be added