$(".button").click(function(){
    let comment =$(".text").val();
    $(".messages").append(`<p>${comment}</p>`);
    });