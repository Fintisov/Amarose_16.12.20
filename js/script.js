$(function(){
    $('input:radio').change(function(){
        $('input:radio').each(function(){
            if($(this).prop('checked')){
                $(this).parents(".btn-prise").addClass("btn-prise-active");
            }else $(this).parents(".btn-prise").removeClass("btn-prise-active");
        })
    });
})



