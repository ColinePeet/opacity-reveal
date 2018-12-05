$("main").children().addClass("hidden");
let listElement = $(".hidden");

$(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    listElement.each(function(i, element){
        let elementOffset = $(element).offset().top;
        if(scrolling > elementOffset - $(window).height() + 50){
            $(element).addClass("reveal");
            $(element).removeClass("hidden");
        }
    })  
})