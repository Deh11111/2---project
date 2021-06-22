$(function() {
    $("[data-modal]").on("click",function(event){
        event.preventDefault();
        
        $(modal_resume).addClass("hide");

    });

    $(modal_resume).on("click",function(){
        $(modal_resume).removeClass("hide");
    });
});