$(document).ready(function(){
    $('#myButton').click(function(){
        let displayText = $('#displayText');
        if(displayText.text() === 'Hello, World!'){
            displayText.text('Button Clicked!');
        }else{
            displayText.text('Hello, World!');
        }
    });
});