document.addEventListener('DOMContentLoaded', function() {
    // elements
    const rangeThumb = document.getElementById('range__thumb');
    const leftSide = rangeThumb.previousElementSibling;
    const rightSide = rangeThumb.nextElementSibling;
    let out = document.querySelector('.test');

    // The current position of mouse
    let x = 0;
    let y = 0;
    let leftWidth = 0;

    // Touch position
    let mobX = 0;
    let mobY = 0;

    // Handle the mousedown event
    // that's triggered when user drags the rangeThumb
    const mouseDownHandler = function(e) {
        // Get the current mouse position

      
          // Get the current touche position
          if(e.type == 'touchstart'){
            //   console.log(e)
            mobX = e.touches[0].pageX;
            mobY = e.touches[0].pageY;
            // console.log('mobile move')
            // console.log(mobX, mobY)
            leftWidth = leftSide.getBoundingClientRect().width;
            // Attach the listeners to `document`
              /**Sensor events**/
            // document.addEventListener('touchend', mouseMoveHandler);
            document.addEventListener('touchmove', mouseMoveHandler);
            document.addEventListener('touchmove', mouseUpHandler);
        }else{
            // console.log(e);
            x = e.clientX;
            y = e.clientY;
            // console.log('x:', x)
            // console.log('y:', y)
            leftWidth = leftSide.getBoundingClientRect().width;
            // Attach the listeners to `document`
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        }
       
    };

    const mouseMoveHandler = function(e) {
        // How far the touch has been moved
        console.log(e)
        if(e.type == 'touchmove'){
            // console.log('=======', e.changedTouches[0].clientX)
           let mdx = e.touches[0].pageX - mobX;
            // console.log(mdx)

            const containerWidth = rangeThumb.parentNode.getBoundingClientRect().width;
            let newLeftWidth = (leftWidth + mdx) * 100 / containerWidth;
            newLeftWidth = Math.max(newLeftWidth, 0);
            newLeftWidth = Math.min(newLeftWidth, 100);
            let rangeVal = Math.floor(newLeftWidth / 10);
            console.log(rangeVal)
            
            leftSide.style.width = `${newLeftWidth}%`;

            leftSide.style.userSelect = 'none';
            leftSide.style.pointerEvents = 'none';

            rightSide.style.userSelect = 'none';
            rightSide.style.pointerEvents = 'none';

            rangeThumb.style.left = `calc(${newLeftWidth}% - 9px)`;
        } 
        else {
            // How far the mouse has been moved
            // console.log('+++++++++++++++')
            //       console.log(x)
            //       console.log(e.clientX)  
            //       console.log('+++++++++++++++')
            let dx = e.clientX - x;
            // console.log('---------')
            // console.log(dx)
            // console.log('---------')
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
        }
       
        
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

         /*Remove sensor events*/
        // document.removeEventListener('touchmove', mouseMoveHandler);
        // document.removeEventListener('touchend', mouseUpHandler);
    };

    // Attach the handler
    rangeThumb.addEventListener('mousedown', mouseDownHandler);

    /*Sensor events*/
    
    rangeThumb.addEventListener('touchstart', mouseDownHandler);
});