$(function(){
    $("#id3").on({
        keyup:function(){
            var places=[
                "market analysis",
                "shopping",
                "about us",
                
            ];var i=0;
            var j=0;
            var arr=[];
            
    var input=document.getElementById('id3').value.toLowerCase();
    var div=document.getElementById('id4');
    if(input.length>0){
                $("#id4").empty();
                while(i<places.length){
                    var words=places[i].toLowerCase();
                        if(words.includes(input)){
                            var p1=document.createElement('p');
                            p1.id="id6";
                            p1.innerHTML=words;
                            div.appendChild(p1);
                           } 
                        i=i+1;
                    }$("#id4").slideDown();
                    
                    $("#id4").click(function(event){
                    document.getElementById('id3').value=event.target.innerText;
                    console.log(event.target.innerText);
                   
                      });  
            $("#id3").blur(function(){
                 $("#id4").slideUp(1000);
     });
            }
    else{
        $("#id4").css({"display":"none"});
    }      
     }
    });
    })