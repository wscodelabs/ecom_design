// Demo by Aurelio De Rosa (@AurelioDeRosa)
// See article: http://www.sitepoint.com/css-position-sticky-introduction-polyfills/

var menu = document.querySelector('.menu');
console.log(menu);
var menuPosition = menu.getBoundingClientRect();
console.log(menuPosition);
var placeholder = document.createElement('div');
console.log(placeholder);
placeholder.style.width = menuPosition.width-100 + 'px';
placeholder.style.height = menuPosition.height+7 + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});

var menu2 = document.querySelector('.menu2');
console.log(menu2);
var menuPosition2 = menu2.getBoundingClientRect();
console.log(menuPosition2);
var placeholder2 = document.createElement('div');
console.log(placeholder2);
placeholder2.style.width = menuPosition2.width + 'px';
placeholder2.style.height = menuPosition2.height + 'px';
var isAdded2 = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition2.top && !isAdded2) {
        menu2.classList.add('sticky2');
        menu2.parentNode.insertBefore(placeholder2, menu2);
        isAdded2 = true;
    } else if (window.pageYOffset < menuPosition2.top && isAdded2) {
        menu2.classList.remove('sticky2');
        menu2.parentNode.removeChild(placeholder2);
        isAdded2 = false;
    }
});


//-------------------------------------------filter nav--------------------------------------------------------
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("main").style.marginLeft = "-250px";
    document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.right = "-280px";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
}

//-----------------------------------------------end of filter nav-------------------------------------------------




//--------------------------------------------------Chat Nav---------------------------------------------------------

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openChatNav() {
    document.getElementById("myChatnav").style.right = "0";
    document.getElementById("main").style.marginLeft = "-250px";
    document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeChatNav() {
    document.getElementById("myChatnav").style.right = "-280px";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
}

//-----------------------------------------------------end of Chat Nav-------------------------------------------------




//range input custome
$('input[type="range"]').on('mouseup', function() {
    this.blur();
}).on('mousedown input', function() {
    styl.inject('input[type=range]:focus::-webkit-slider-thumb:after, input[type=range]:focus::-ms-thumb:after, input[type=range]:focus::-moz-range-thumb:after', {content: "'"+this.value+"'"}).apply();
});


//minus to plus on click

$('.product-category-heading').click(function(){
    $(this).find('i').toggleClass('fa fa-plus fa fa-minus')
});

