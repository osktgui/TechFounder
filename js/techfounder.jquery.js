(function($, window, document, undefined){
	var techDocument = $(document);
	$(function(){
		$(document).on("scroll", controlarScroll); 
		$("#boton_mostrar").on("click", lanzarEventoMenuSecundario);
	});

	function lanzarEventoMenuSecundario(event){
		event.preventDefault();
		var elementoDOM = $(this).parent();
		if(elementoDOM.hasClass('active')){
			// $("#menu_adicional").slideUp("fast");
			$("#menu_adicional").animate({
	         "top": -80,
	         "left": 0
		      }, 500, "easeOutBounce");
			elementoDOM.removeClass('active')
		}else{
			// $("#menu_adicional").slideDown("fast");
			$("#menu_adicional").animate({
	         "top": 42,
	         "left": 0
		      }, 500, "easeOutBounce");
			elementoDOM.addClass('active');
		}
	}

	function controlarScroll(){ 
		var menuPrincipal = $("#menu_principal");
		var distanceTop = techDocument.scrollTop();
		console.log(distanceTop);
		if(distanceTop > 100 && !menuPrincipal.hasClass('show')){
			menuPrincipal.animate({
	         "top": 0,
	         "left": 0
		      }, 500, "easeInQuad").addClass("show").removeClass('hide'); 

		}else if(distanceTop <= 100 && menuPrincipal.hasClass('show')){ 
 
			// var menuAdicional = $("#boton_mostrar").parent();
			// if(menuAdicional.hasClass('active')){
			// 	menuAdicional.removeClass('active');
			// 	$("nav", menuAdicional).attr("top", "-80px");
			// }

			menuPrincipal.animate({
		         "top": -125,
		         "left": 0
			      }, 500, "easeInQuad").addClass("hide").removeClass('show');
		} 
	}
})(jQuery, window, document)