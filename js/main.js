// onglets
$(".tabs").each(function(){
    $(".tabs").click(function() {
        $(".tabs").removeClass("darker");
        $(this).addClass("darker");
    });
});

// au clic sur .project > addClass hidden sur .projects-section
// removeClass hidden sur .single-project-section

$(".project").each(function(){
    $(".project").click(function() {
        $(this).parent(".section-flex").parent(".projects-section").addClass("hidden")
        $(this).parent(".section-flex").parent(".projects-section").siblings(".single-project-section").removeClass("hidden")
    });
});
/// CE PROJET 8

// au clic sur graphic design remove .hidden sur .projects-section et add .hidden sur les autres sections
$(".onglet1").click(function() {
    $(this).parent("nav").parent("header").siblings("main").children(".single-project-section").addClass("hidden");
    $(this).parent("nav").parent("header").siblings("main").children(".about").addClass("hidden");
    $(this).parent("nav").parent("header").siblings("main").children(".projects-section").removeClass("hidden");
});

// au clic sur about 
$(".onglet3").click(function() {
    $(this).parent("nav").parent("header").siblings("main").children(".single-project-section").addClass("hidden");
    $(this).parent("nav").parent("header").siblings("main").children(".projects-section").addClass("hidden");
    $(this).parent("nav").parent("header").siblings("main").children(".about").removeClass("hidden");
});

// reveal sur la premiere page
let windowHeight = $(window).height();

function apparait () {
  $(".animate-window").each(function() {
    let fromTop = $(this).offset().top;
    let windowScroll = $(window).scrollTop();
    if ((windowScroll + (windowHeight - 100)) >= fromTop) {
      $(this).addClass('reveal');
    }
  });
}
apparait();
$(window).on('scroll', function() {
  apparait();
})

// reveal au clic
$(".section").each(function(){
    $(".tabs, .project").click(function() {
        $(".animate-clic").removeClass('reveal');
        let windowHeight = $(window).height();
        function reveal () {
        $(".animate-clic").each(function() {
          let fromTop = $(this).offset().top;
          let windowScroll = $(window).scrollTop();
          if ((windowScroll + (windowHeight - 100)) >= fromTop) {
            $(this).addClass('reveal');
          }
        });
      }
      reveal();
      $(window).on('scroll', function() {
        reveal();
      })  
    });
});

//au clic sur projet : amener directement à tel scroll de la page
// pareil au clic sur about/contact
$(".section").click(function() {
    $(window).scrollTop(200)
});
$(".tabs").click(function() {
    $(window).scrollTop(200)
});