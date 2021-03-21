employerStateObj = {
    situation1: [{
        url: './img/scroll-icons/1.png',
        text: '#НЕжелание Помочь'
    }, {
        url: './img/scroll-icons/2.png',
        text: '#НЕрешён Вопрос'
    }, {
            url: './img/scroll-icons/3.png',
            text: '#Медленное Обслуживание'
        }, {
            url: './img/scroll-icons/4.png',
            text: '#НЕзнает Продукт Процесс'
        }, {
            url: './img/scroll-icons/5.png',
            text: '#Грубость Сотрудника'
        }],
    situation2: [{
        url: './img/scroll-icons/6.png',
        text: '#Желание Помочь'
    }, {
        url: './img/scroll-icons/7.png',
        text: '#Решил Вопрос'
    }, {
            url: './img/scroll-icons/8.png',
            text: '#Быстрый Сервис'
        }, {
            url: './img/scroll-icons/9.png',
            text: '#Знает Продукт Процесс'
        }, {
            url: './img/scroll-icons/10.png',
            text: '#Вежливый сотрудник'
        }],
}
officeStateObj = {
    situation1: [{
        text: '#НЕудобный график работы'
    }, {
        text: '#НЕухожанный внешний вид офиса'
    }, {
        text: '#НЕухоженный, устаревший интерьер'
    }, {
        text: '#Длинная очередь в отделении'
    }, {
        text: '#НЕкомфортное: мебель, температура, запахи и т.п.'
    }],
    situation2: [{
        text: '#Удобный график работы'
    }, {
        text: '#Ухожанный внешний вид офиса'
    }, {
        text: '#Современный и ухожанный интерьер'
    }, {
        text: '#Нет очередей'
    }, {
        text: '#Комфортное: мебель, температура, запахи и т.п.'
    }],
}


let sliderItems = document.querySelectorAll('.employer-slider-box .employer-label');
let officeSliderItems = document.querySelectorAll('.office-slider-box .office-label');
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

    let wscaleNumbers = document.querySelectorAll('.wr-range-number');
    let workerInputs = document.querySelectorAll('.first-question-inp');
    // Horizontal range slider
    rangeSlider(document.getElementById('range-slider-1'), {
        value: 0,
        drag: function(v) {
            if(v > 0){
                $('.help-txt').fadeOut();
                $('.hidden-content').fadeIn();
            }
            let rangeVal = Math.round(v / 10);
            // console.log(rangeVal);
            $('#range1-val').val(rangeVal);

            for(let i = 0; i < wscaleNumbers.length; i++){
                $(wscaleNumbers).css({'font-size':'14px', 'font-weight':'normal'});
                $(wscaleNumbers[rangeVal]).css({'font-size':'16px', 'font-weight':'600'});
            }

            if(rangeVal < 10){

                // images NOT STANDART size!!!!!
                $(sliderItems[0]).find(".check-icon").css({'width':'67px', 'height':'82px','-webkit-mask-size':'67px'});
                $(sliderItems[1]).find(".check-icon").css({'width':' 95px', 'height':'82px','-webkit-mask-size':'95px'});
                $(sliderItems[2]).find(".check-icon").css({'width':' 40px', 'height':'75px','-webkit-mask-size':'40px', 'margin-top':'7px'});
                $(sliderItems[3]).find(".check-icon").css({'width':' 75px', 'height':'82px','-webkit-mask-size':'75px'});
                $(sliderItems[4]).find(".check-icon").css({'width':' 75px', 'height':'82px','-webkit-mask-size':'75px'});
                 
                // $('.first-question-inp').prop('checked', false);  
                let employerSituation = employerStateObj.situation1;
                for (let i = 0; i < sliderItems.length; i++){
                    // console.log($(sliderItems)[i]);
                   $(sliderItems[i]).find(".check-icon").css({'-webkit-mask-image': `url("${employerSituation[i].url}")`});
                   $(sliderItems[i]).find(".employer-label-txt").text(employerSituation[i].text);
                    workerInputs[i].value = employerSituation[i].text;
                

                   $('.employer-slider-box .slides-title').text('ВАC разочаровало:');
                }
            }
            if (rangeVal >= 7 && rangeVal <= 9){
                $('.employer-slider-box .slides-title').text('ВАМ испортило впечатление:');
            }
            if (rangeVal == 10){

                 // images NOT STANDART size!!!!!
                 $(sliderItems[0]).find(".check-icon").css({'width':'76px', 'height':'82px','-webkit-mask-size':'76px'});
                 $(sliderItems[1]).find(".check-icon").css({'width':' 81px', 'height':'82px','-webkit-mask-size':'81px'});
                 $(sliderItems[2]).find(".check-icon").css({'width':' 65px', 'height':'82px','-webkit-mask-size':'65px', 'margin-top':'0px'});
                 $(sliderItems[4]).find(".check-icon").css({'width':' 72px', 'height':'82px','-webkit-mask-size':'72px'});

                let employerSituation = employerStateObj.situation2;
                for (let i = 0; i < sliderItems.length; i++){
                    // console.log($(sliderItems[i]).find(".check-icon"));
                    $(sliderItems[i]).find(".check-icon").css({'-webkit-mask-image': `url("${employerSituation[i].url}")`});
                    $(sliderItems[i]).find(".employer-label-txt").text(employerSituation[i].text);
                    workerInputs[i].value = employerSituation[i].text;
                }
                $('.employer-slider-box .slides-title').text('ВАМ понравилось больше всего:');
           }
        
            for (let i = 0; i < 10; i++) {
                i < rangeVal ?
                    parts[i].classList.remove('inactive') :
                    parts[i].classList.add('inactive');
                    
            }
        }
    });

}


function runRange2(selector) {
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
    let officeScaleNumbers = document.querySelectorAll('.of-range-number');
    let officeInputs = document.querySelectorAll('.second-question-inp');
    // Horizontal range slider
    rangeSlider(document.getElementById('range-slider-2'), {
        value: 0,
        drag: function(v) {
            
            let rangeVal = Math.round(v / 10);
            // console.log(rangeVal);
            $('#range2-val').val(rangeVal);
            for(let i = 0; i < officeScaleNumbers.length; i++){
                $(officeScaleNumbers).css({'font-size':'14px', 'font-weight':'normal'});
                $(officeScaleNumbers[rangeVal]).css({'font-size':'16px', 'font-weight':'600'});
            }
            if (rangeVal < 10){
                let officeSituation = officeStateObj.situation1;
                for (let i = 0; i < officeSliderItems.length; i++){
                    $(officeSliderItems[i]).find(".office-label-txt").text(officeSituation[i].text);
                    officeInputs[i].value = officeSituation[i].text;
                }
                $('.office-slider-box .slides-title').text('ВАС разочаровало:');
                $('.point10').hide();
            }
            if (rangeVal >= 7 && rangeVal <= 9){
                let officeSituation = officeStateObj.situation1;
                for (let i = 0; i < officeSliderItems.length; i++){
                    $(officeSliderItems[i]).find(".office-label-txt").text(officeSituation[i].text);
                    officeInputs[i].value = officeSituation[i].text;
                }
                $('.office-slider-box .slides-title').text('ВАМ испортило впечатление:');
            }
            if (rangeVal == 10){
                let officeSituation = officeStateObj.situation2;
                for (let i = 0; i < officeSliderItems.length; i++){
                    $(officeSliderItems[i]).find(".office-label-txt").text(officeSituation[i].text);
                    officeInputs[i].value = officeSituation[i].text;
                }
                $('.office-slider-box .slides-title').text('ВАМ понравилось больше всего:');
            }
        
            for (let i = 0; i < 10; i++) {
                i < rangeVal ?
                    parts[i].classList.remove('inactive') :
                    parts[i].classList.add('inactive');
                    
            }
        }
    });

}

runRange('#range1');
runRange2('#range2');




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