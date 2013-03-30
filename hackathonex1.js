$(document).ready(function(){
var i = 0;

    animateDiv(i);
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(i){
    var newq = makeNewPosition();
    $('#triangle').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var neww = makeNewPosition();
    $('#square').animate({ top: neww[0], left: neww[1] }, function(){
      animateDiv(i++);        
    });
    if(i<50){
    var newcirc = makeNewPosition();
    $("<div class='circle'></div>").appendTo("#x").css({top:newcirc[0],left:newcirc[1]});
    }
};
