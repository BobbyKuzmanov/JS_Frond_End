function attachGradientEvents() {

    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', onOut);   

    function onMove(event) {
        const result = document.getElementById('result');
        const x = event.offsetX;
        const width = event.target.clientWidth;
        const percent = Math.floor(x / width * 100);
        result.textContent = `${percent}%`;
    }

    function onOut(event) {
        const result = document.getElementById('result');
        result.textContent = '';
    }
}

/*
 A program that detects and displays how far along a gradient the user has moved their mouse.
     The result should be rounded down and displayed as a percentage inside the <div> with id "result". 
 Submit only the attachGradientEvents() function in Judge. 
 Input/Output
 There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/