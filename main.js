var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var main          = document.getElementById('main');
    var showSidebar      = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            main.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-150vw';
            navigationHeader.style.animationName = '';
            main.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 1400 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });