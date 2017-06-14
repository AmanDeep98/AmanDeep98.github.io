jQuery(document).ready(function($) {
	//variables and random generator
	
	var text;
	function makealphabet()
{
    text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 16; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};
	//arrays and indices
    
    makealphabet();
    /*function show(no){
	document.getElementById("box_"+no).innerHTML=text[no];
	setTimeout(function(){
		document.getElementById("box_"+no).innerHTML="";},100);
	setTimeout(function(){
		document.getElementById("box_"+m).innerHTML="";},100);
}*/
     //check(this);
    function check(item) {
    var id = $(item).attr("id");
    alert(id);
    
}   var chances=1;
    var chance=1;
    var matches=0;
	var selected=undefined;
$(".container").hide();
$("footer").hide();
$("#rules").hide();
$(".status").hide();
$("#play").click(function(){
	$("#play").hide(750);
	$(".container").show(1000);
	$("footer").show(1000);
	$("#rules").show(1000);
	$(".rules").hide(1000);
	$(".status").show(1000);
});
$("#rules").click(function(){
	$(".container").hide();
	$("footer").hide();
    $("#rules").hide();
    $(".rules").show(2000);
    $("#play").show(2000);

});
   
	//button arrangements
	//div arrangements
	//getting the values
	jQuery(".box").click(function(){
       

		  jQuery(this).addClass('show');
       
         jQuery("#box_1").html(text[0]);
	jQuery("#box_2").html(text[1]);
	jQuery("#box_3").html(text[2]);
	jQuery("#box_4").html(text[3]);
	jQuery("#box_5").html(text[4]);
	jQuery("#box_6").html(text[5]);
	jQuery("#box_7").html(text[6]);
	jQuery("#box_8").html(text[7]);
	jQuery("#box_9").html(text[8]);
	jQuery("#box_10").html(text[9]);
	jQuery("#box_11").html(text[10]);
	jQuery("#box_12").html(text[11]);
	jQuery("#box_13").html(text[12]);
	jQuery("#box_14").html(text[13]);
	jQuery("#box_15").html(text[14]);
	jQuery("#box_16").html(text[15]);
	chance=chance+1;


	
	//matching the indices

var div=jQuery(this);
   	if (selected&&selected.hasClass('show')) {
   		if (selected.attr('id')!=div.attr('id')&&selected.html()==div.html()) {
   			matches++;
   			alert('Success!!');
   			//jQuery(".box").removeClass('show');

   		}
   		//jQuery(".box").addClass('show');
   		//else{alert('hello');}
   		//jQuery(this).addClass('show');
   	}
   	else{
    	selected=jQuery(this);
    	jQuery(this).addClass('show');
    	jQuery(".box").removeClass('show');

    }
    if(chance>3){
		//if(check("#id_1").html()!=check("#id_2").html()){alert('hi');}
		jQuery(".box").removeClass('show');

		//jQuery(this).addClass('show');
		//alert('matches= '+matches+' ' +'chances='+(chances));
		
		chance=1;
		chances++;
		//makealphabet();


	}
   
	
	});

	
	//end function
    jQuery("#End").click(function() {
    	/* Act on the event */
        alert('Your chances were '+chances+' and matches were '+matches+'  So luck predictor predicts '+
        	'a percentage of  ' +Math.floor(Math.random()*100));
    });
	
  
	

//onclick="check($(this).attr('id'))
});