(function(){
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');
    });
    
    var anchors = document.querySelectorAll('.navbar-item');
    anchors.forEach(function(element){ 
        console.log(element.getAttribute('href'))
        if (element.getAttribute('href') != '#home'){
            element.addEventListener('click', function () { 
                anchors.forEach(function(elmt){
                    e = document.querySelector(elmt.getAttribute('href'));
                    e.firstElementChild.classList.remove('sel');
                })
                section = document.querySelector(element.getAttribute('href'));
                section.firstElementChild.classList.toggle('sel');
            })
        }
    })
})();

