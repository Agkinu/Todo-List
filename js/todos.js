$("ul").on("click","li",function(){
  $(this).toggleClass("lineThrough");
});
$("ul").on("click","span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
});
$("input[type='text'").on("keypress", function(event){
  if(event.which===13){
    var text = $(this).val();
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+text+"</li>");
    $(this).val("");
  }
});
$("#plusButton").on("click", function(){
  $("input[type='text'").fadeToggle();
});
