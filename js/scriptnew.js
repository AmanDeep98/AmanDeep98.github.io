jQuery(document).ready(function($) {
	var clicks=0;
	var score=0;
	var active=0;
	var n=4;
$("#play").click(function(){
	$(this).hide(1000);
	$("#start").show(1000);
});

$("#start").click(function(){
	play();
	$("#start").hide(1000);
});

function set()
			{
				//letterarray = rand();
				//gamearr = [];
				active = 0; clicks = 0; score = 50;
				var gametab = "<table style='display:none'>";
				for(var i = 0; i < n*n; i++)
				{
					if(i % n == 0)
						gametab += "<tr>";
					//var ch = letterarray.pop();
					gametab += '<td><div class="flipper"><div class="front"></div><div class="back">' + text[i] + '</div></div></td>';
					//gamearr.push(ch);
					if(i % n == n-1)
						gametab += "</tr>";
				}
				gametab += "</table>";
				$('#gamebox').innerhtml(gametab);
				$('#gamebox td').addClass('card');
				$('table').css('background-color', 'rgba(241, 243, 206, 0.8)');
				var k = 675/(11*n+1);
				$('.card').css({'width':(10*k) + 'px', 'height':(6*k)+'px', 'font-size':(120/n) + 'px'})
				$('.front, .back').css({'width':(10*k-10) + 'px', 'height':(6*k-10)+'px', 'line-height': (6*k - 10) + 'px'});
				$('table').css('border-spacing', k + 'px '+ k + 'px');
				$('.card').on('click', flip);
				tabback = (1+Math.floor(Math.random()*6));
				//$('table').css('background-image', 'url("images/tableback/tableback'+tabback+'.png")');
				//$('.front').css('background-image', 'url("images/cardback/back'+(1+Math.floor(Math.random()*6))+'.png")');
				updatestatus();
			}	

function play(){
	
	setTimeout(function(){
						$("table").show(1000);
					}, 750);
	set();
   

}

var text;
	function makealphabet()
{
    text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 16; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};


function updatestatus(){
	$("#clicks").html(clicks);
	$("#score").html(score);
	
}


function activate(index){
	$(".card").eq(index).addClass('show');
}

function deactivate(){
	$(".card").eq(index).removeClass('show');
}

function check(){
	if($(".show").eq(0).text()==$(".show").eq(1).text()){
		$(".show").addClass('hide').removeClass('show');
	}
	else{
		setTimeout(function(){
			$(".show").removeClass('show');
		},750);
	}
}

function flip(){
	if (!($(this).hasClass('show'))&&(!($(this).hasClass('hide')))&&($(".show").length<2)) {
		activate($(".card").index(this));
		active++;
		if(active==2){
			check();
			active=0;
		}
		clicks++;
	}
	else if($(this).hasClass('show')){
		deactivate();
		active=0;
		clicks++;

	}
	updatestatus();

}









});