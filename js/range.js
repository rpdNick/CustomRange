document.addEventListener('DOMContentLoaded', function() {
    // Query the element
    const rangeThumb = document.getElementById('range__thumb');
    const leftSide = rangeThumb.previousElementSibling;
    const rightSide = rangeThumb.nextElementSibling;

    // The current position of mouse
    let x = 0;
    let y = 0;
    let leftWidth = 0;

    // Handle the mousedown event
    // that's triggered when user drags the rangeThumb
    const mouseDownHandler = function(e) {
        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

         /*Sensor events*/
         document.addEventListener('touchstart', mouseMoveHandler);
         document.addEventListener('touchmove', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        const containerWidth = rangeThumb.parentNode.getBoundingClientRect().width;
        let newLeftWidth = (leftWidth + dx) * 100 / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);
        let rangeVal = Math.floor(newLeftWidth / 10);
        console.log(rangeVal)
        
        leftSide.style.width = `${newLeftWidth}%`;

        leftSide.style.userSelect = 'none';
        leftSide.style.pointerEvents = 'none';

        rightSide.style.userSelect = 'none';
        rightSide.style.pointerEvents = 'none';

        rangeThumb.style.left = `calc(${newLeftWidth}% - 13px)`;
        
    };

    // Triggered when user drops the rangeThumb
    const mouseUpHandler = function() {
        leftSide.style.removeProperty('user-select');
        leftSide.style.removeProperty('pointer-events');

        rightSide.style.removeProperty('user-select');
        rightSide.style.removeProperty('pointer-events');

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

         /*Sensor events*/
        rangeThumb.addEventListener('touchend', mouseDownHandler);
        rangeThumb.addEventListener('touchend', mouseDownHandler);
    };

    // Attach the handler
    rangeThumb.addEventListener('mousedown', mouseDownHandler);

    /*Sensor events*/
    rangeThumb.addEventListener('touchstart', mouseDownHandler);
    rangeThumb.addEventListener('touchmove', mouseDownHandler);
    
});