<<<<<<< HEAD
    $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });

    $(document).ready(function()
{
    $("#scrollbar1").tinyscrollbar();
});
        
=======
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
    width: 200,
    height: 993
  });
});
>>>>>>> ee7fff1fc0dbafb80b70734fbbe0c798e3779fd5
