const colorsArray = ["rgb(147,8,11)", "rgb(147,8,11)", "rgb(153,16,17)", "rgb(159,23,24)", "rgb(166,31,31)", "rgb(172,38,37)", "rgb(178,46,44)", "rgb(185,53,51)", "rgb(191,61,57)", "rgb(197,68,64)", "rgb(204,75,70)", "rgb(210,77,73)", "rgb(216,79,75)", "rgb(222,81,77)", "rgb(228,82,79)", "rgb(235,84,82)", "rgb(241,86,84)", "rgb(247,88,86)", "rgb(253,90,89)", "rgb(254,94,88)", "rgb(254,99,88)", "rgb(254,104,87)", "rgb(254,109,86)", "rgb(255,114,85)", "rgb(255,119,85)", "rgb(255,124,84)", "rgb(255,129,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,131,83)", "rgb(255,132,79)", "rgb(255,137,69)", "rgb(255,141,58)", "rgb(255,145,47)", "rgb(255,150,36)", "rgb(255,154,26)", "rgb(255,158,15)", "rgb(255,162,4)", "rgb(255,165,0)", "rgb(255,167,0)", "rgb(255,170,0)", "rgb(255,172,0)", "rgb(255,174,0)", "rgb(255,176,0)", "rgb(255,178,0)", "rgb(255,180,0)", "rgb(255,183,0)", "rgb(253,186,1)", "rgb(249,191,4)", "rgb(244,196,6)", "rgb(240,200,9)", "rgb(235,205,11)", "rgb(231,210,14)", "rgb(226,215,17)", "rgb(221,220,19)", "rgb(217,225,22)", "rgb(214,228,28)", "rgb(212,231,36)", "rgb(209,233,45)", "rgb(207,235,53)", "rgb(205,238,61)", "rgb(203,240,70)", "rgb(201,242,78)", "rgb(198,245,87)", "rgb(190,245,92)", "rgb(168,243,91)", "rgb(147,241,90)", "rgb(126,239,89)", "rgb(105,237,89)", "rgb(83,235,88)", "rgb(62,233,87)", "rgb(41,231,86)", "rgb(20,229,86)", "rgb(0,227,85)", "rgb(0,221,80)", "rgb(0,216,75)", "rgb(0,211,71)", "rgb(0,206,66)", "rgb(0,201,62)", "rgb(0,196,57)", "rgb(0,190,52)", "rgb(0,185,48)", "rgb(0,180,43)", "rgb(0,175,38)", "rgb(0,171,35)", "rgb(1,169,35)", "rgb(2,168,36)", "rgb(2,166,36)", "rgb(3,165,36)", "rgb(4,163,37)", "rgb(5,162,37)", "rgb(5,160,37)", "rgb(6,159,38)", "rgb(7,157,38)"];



function runRange(selector) {
    const parent = document.querySelector(selector);
    const container = parent.querySelector('.container');
    for (let i = 0; i < 9; i++) {
        const partClone = document.querySelector('.range-part').cloneNode(true);
        container.append(partClone);
    }
    const lines = container.querySelectorAll('.line');
    colorsArray.map((v, i) => {
        lines[i].style.background = v;
    });

    const parts = parent.querySelectorAll('.range-part');
    let prevV = 0;
    let isScrollRight = null;

    // to get val use 
    // $('input[type="range"]').val()

    $(selector + ' input[type="range"]').rangeslider({
        polyfill: false,
        disabledClass: 'rangeslider--disabled',
        onSlide: (p, v) => {
            $('.help-txt').fadeOut();
            isScrollRight = v > prevV;
            for (let i = 0; i < 10; i++) {
                i < v ?
                    parts[i].classList.remove('inactive') :
                    parts[i].classList.add('inactive');
            }
        },
        onSlideEnd: (p, v) => {
            prevV = v;
        },
        // onInit : function() {
        //     this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
        // },
    });
}

runRange('#range1');




// const rangeThumb = document.querySelector('.range-thumb');
// const leftSide = document.querySelector('.left-position');
// console.log(leftSide)
// const rightSide = document.querySelector('.right-position');

//   // The current position of mouse
//   let x = 0;
//   let y = 0;

//   // Touch position
//   let mobX = 0;
//   let mobY = 0;

//   let leftWidth = 0;

//   const mouseDownHandler = function(e){
//     // Get the current touche position

//     if(e.type == 'touchstart'){
//        //   console.log(e)
//        mobX = e.touches[0].pageX;
//        console.log('sensor move')
//        console.log(mobX, mobY)


//        // Attach the listeners to `document`

//        // document.addEventListener('touchmove', mouseMoveHandler);
//        // document.addEventListener('touchmove', mouseUpHandler);
//    } 
//    else{
//        // console.log(e);
//        x = e.clientX;
//     //    console.log('x:', x)
//     //    console.log('y:', y)
//        leftWidth = leftSide.width;
//        console.log(leftWidth);
//        // Attach the listeners to `document`

//        // document.addEventListener('mousemove', mouseMoveHandler);
//        // document.addEventListener('mouseup', mouseUpHandler);
//    }
// }



//  // Attach the handler
//  rangeThumb.addEventListener('mousedown', mouseDownHandler);

//  /*Sensor events*/

//  rangeThumb.addEventListener('touchstart', mouseDownHandler);