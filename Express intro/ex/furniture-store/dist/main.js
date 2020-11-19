$('button').on("click",function(){
    const val = $('input').val()

    $.get(`pricecheck/${val}`,function(data){
        $('div').empty()
        $('div').append(`<div>${data.price}</div>`)
    })
})
