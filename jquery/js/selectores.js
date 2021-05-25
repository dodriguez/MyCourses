$(document).ready(function(){

    //selector id
    $("#rojo").css("background","red")
              .css("color", "white");
            
    $("#amarillo").css("background","yellow")
              .css("color", "white");

    $("#verde").css("background","green")
              .css("color", "white");


    //selector de una clase
    var miClase = $(".zebra").css("padding", "5px"); //.eq(1) selecciona un elemento d eun array
    //miClase.css("border", "5px dashed black")

    $('.sinBorder').click(function(){
        console.log("click");
        $(this).addClass('zebra');
    });

    //selectores de etiqueta
    var parrafos = $('p').css('cursor', 'pointer'); // idea para quitar scroll
    parrafos.click(function(){
        var pThis = $(this); //cargar el dom
        if (!pThis.hasClass('grande')) {
            pThis.addClass('grande') //siempre trbajar con comillas simples
            
        }else{
            pThis.removeClass('grande')
        }
        //$(this).removeClass("zebra")
    });

    //selectores de atributos
    $('[titel="Google"]').css('background', '#cc'),
    $('[title="Facebook"]').css('background', 'blue');

    //otros
    //$('p,a').addClass('margen-superior');
    var search = $("#caja").find('.result'); //forma 1
    //var search = $("#caja .result"); // forma 2
    var srh = $("#elemento2").parent().parent().find('.result');
    console.log(srh); //find() busca en todo el selector dado
                    // parent() da un paso atras del elemento dado ..
});