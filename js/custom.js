// A $( document ).ready() block.
$( document ).ready(function() {

    $(document).ready();
    var menu = document.querySelector('.menu');
//console.log(menu);
    var menuPosition = menu.getBoundingClientRect();
//console.log(menuPosition);
    var placeholder = document.createElement('div');
//console.log(placeholder);
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
//console.log(menu2);
    var menuPosition2 = menu2.getBoundingClientRect();
//console.log(menuPosition2);
    var placeholder2 = document.createElement('div');
//console.log(placeholder2);
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

    var btnFilter= $( "#btnFilterNav" );
    var btnChat=  $( "#btnChatNav" );
    var filterNav = $('#FilterNav');
    var chatNav = $('#myChatnav');

    btnFilter.click(function() {
        console.log('Side Filter nav opened');
        openNav();
    });
    btnChat.click(function() {
        console.log('Side nav Chatnav opened');
        openChatNav();
    });

    $('.btnClose').click(function(){
        var id = $(this).closest("div").prop("id");
        closeNav(id);
    });

    function openNav() {
        var element =  $("#FilterNav");
        element.css('right','0');
        $("#main").css(
            {"margin-right": "250px", "margin-left": "-250px"});
        element.addClass('navOpen');
    }
    function openChatNav() {
        var element =  $("#myChatnav");
        element.css('right','0');
        $("#main").css(
            {"margin-right": "250px", "margin-left": "-250px"});
        element.addClass('navOpen');
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav(id) {
        var element =  $("#"+id);
        //console.log(element);
        element.css('right','-280px');

        $("#main").css({"margin-right": "0", "margin-left": "0"});
        element.removeClass('navOpen');
        console.log( element+' nav closed');
    }

//-----------------------------------------------end of filter nav-------------------------------------------------
//click anywhere close  side navbar

    $(document).click(function() {
        var id = $(this).find('.navOpen').prop("id");
        console.log('Body click');
        closeNav(id);
    });
    btnChat.click(function(e) {
        e.stopPropagation(); // This is the preferred method.
        return false;        // This should not be used unless you do not want
                             // any click events registering inside the div
    });
    btnFilter.click(function(e) {
        e.stopPropagation(); // This is the preferred method.
        return false;        // This should not be used unless you do not want
                             // any click events registering inside the div
    });
    filterNav.click(function(e) {
        e.stopPropagation(); // This is the preferred method.
        return false;        // This should not be used unless you do not want
                             // any click events registering inside the div
    });
    chatNav.click(function(e) {
        e.stopPropagation(); // This is the preferred method.
        return false;        // This should not be used unless you do not want
                             // any click events registering inside the div
    });

//range input custom
    $('input[type="range"]').on('mouseup', function() {
        this.blur();
    }).on('mousedown input', function() {
        styl.inject('input[type=range]:focus::-webkit-slider-thumb:after, input[type=range]:focus::-ms-thumb:after, input[type=range]:focus::-moz-range-thumb:after', {content: "'"+this.value+"'"}).apply();
    });


//minus to plus on click

    $('.product-category-heading').click(function(){
        $(this).find('i').toggleClass('fa fa-plus fa fa-minus')
    });

});



//for wizard demo
