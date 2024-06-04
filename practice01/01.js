document.getElementById('myButton').addEventListener('click', function(){
    let displayText = document.getElementById('displayText');
    if (displayText.textContent === 'Hello, World!'){
        displayText.textContent = 'Button Clicked!';
    }else{
        displayText.textContent = 'Hello, World!';
    }
});