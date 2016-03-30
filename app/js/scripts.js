$(document).ready(function(){
    /* Hello World*/
    // alert("Hello World with $(document)");

    /* Function */
    // saySomething("Message");

    /* Variables */
    // var message = "New Message";
    // saySomething(message);

    /* Selectors */
    // var $element = $('#button1');
    // $element.hide();

    //or
    // $('#button1').hide();

    /* Creating an Element */
    // var $alert = $('<div>Alert</div>');
    // $('.panel').append($alert);
    // $alert.addClass('alert alert-success');

    /* Adding/Removing CSS */
    // $alert.removeClass('alert alert-success');
    // $alert.toggleClass('alert-old');
    // $alert.toggleClass('alert-old');

    // $alert.css( "color", "red" );

    /* Contents */
    // $('.panel-heading').text('<h2> Alerts to</h2>');
    // $('.panel-heading').html('<h2> Alerts to</h2>');

    // $('#greet').click(function(){
    //     var $input = $('input').val();
    //     saySomething($input);
    // })

    /* Events */
    // $('#button1').click(function(){
    //     saySomething("Passed");
    // });

    // $('#toggle').click(function(){
    //     $alert.toggleClass('alert-old');
    // });

    // $('#toggle').click(function(){
    //     var $alert = $('<div>Alert</div>');
    //     $('.panel').append($alert);
    //     $alert.addClass('alert alert-success');
    // });

    // $('input').keydown(function(){
    //     var characters = 50 - $(this).val().length;
    //     $('#remainingCharacters').html(characters);
    // });

    // $('.alert').click(function(){
    //     $(this).fadeOut();
    // });

    // $(document).on('click', '.alert', function(){
    //     $(this).fadeOut();
    // })

    /* Animation */
    // $('#blockButtonTwo').click(function(){
    //     $('#blockButtonOne').fadeIn("slow");
    // });
    // $('#blockButtonTwo').click(function(){
    //     $(this).fadeOut();
    // });
    // $('#blockButtonThree').click(function(){
    //     $(this).slideUp();
    // });
    // $('#blockButtonFour').click(function(){
    //     $('#blockButtonThree').slideDown();
    // });
    //
    // $('.grow').mouseenter(function(){
    //     $(this).animate({
    //         height: '+=20px',
    //         width: '+=20px',
    //         fontSize: '+=20px'
    //     })
    // });
    //
    // $('.grow').mouseleave(function(){
    //     $(this).animate({
    //         height: '-=20px',
    //         width: '-=20px',
    //         fontSize: '-=20px'
    //     })
    // });

    function saySomething(message){
        alert(message);
    }
});
// $(function(){
//     /* Hello World*/
//     alert("Hello World with $()");
// });
