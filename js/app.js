$(document).ready(function () {

    $('#clear').click(function () {
        $('#canvas').clearCanvas();
    });

    $('#create').click(function () {
        console.log('got here');
        var colour = '#' + $('#ball').val().toString();
        var size = $('#slider').val();

        $('#canvas').drawImage({
            source: 'img/puppy.png',
            x: 365,
            y: 260,
            draggable: true
        }).drawArc({
            fillStyle: colour,
            x: 365,
            y: 470,
            radius: size,
            draggable: true
        }); //end draw text

    }); //end click


}); //end ready