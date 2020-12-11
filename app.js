// #### This is Parallax Scroll function
// el = element, speed = data-speed, section = section
function parallaxSec(el, speed, section){
    window.addEventListener('scroll', function(){
         

        el.style.transform = `translateY(${section.getBoundingClientRect().top  * speed}px)`;
    })
}

// ##### Calling Parallax Scroll Function for HERO
const heroText = document.querySelector('.hero-title-text');
const heroTextSpeed = heroText.getAttribute('data-speed');

const heroTitle = document.querySelector('.hero-title');
const heroTitleSpeed = heroTitle.getAttribute('data-speed');

const hero = document.querySelector('.hero-section');


parallaxSec(heroText, heroTextSpeed, hero);
parallaxSec(heroTitle, heroTitleSpeed, hero);


// ###### hero title disappear
function heroTitleDisappear(el, section){
    window.addEventListener('scroll', function(){
        if (section.getBoundingClientRect().top < -300){
            el.classList.add('heroTitleDisappear');
        }
        else{
            el.classList.remove('heroTitleDisappear');
        }
    });
    
}

heroTitleDisappear(heroTitle, hero);



// #### DOWN ARROW SCROLL
const arrow = document.querySelector('#downArrow');
arrow.addEventListener('click', function(){
    smoothScroll('.who', 2000);
});

//#### SMOOTH SCROLL FUNCTION #####
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    console.log(startPosition);
    
    
    
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(t,b,c,d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * ( t - 2) -1) + b;
    }

    requestAnimationFrame(animation);
}


//##### WHO SECTION PARALLAX SCROLL

const layer3 = document.querySelector('#layer3img');
const layer3Speed = layer3.getAttribute('data-speed');

const whoTitle = document.querySelector('.who-title-h1');
const whoTitleSpeed = whoTitle.getAttribute('data-speed');

const whoCards = document.querySelector('.who-container');
const whoCardsSpeed = whoCards.getAttribute('data-speed');

const whoSection = document.querySelector('.who');

parallaxSec(layer3, layer3Speed, whoSection);
parallaxSec(whoTitle, whoTitleSpeed, whoSection);
parallaxSec(whoCards, whoCardsSpeed, whoSection);




window.addEventListener('scroll', function(e){
    var upArrow = document.querySelector('.downArrow');
    var windowPosition = window.scrollY;
    
    console.log(windowPosition);

    if (windowPosition > 200){
        upArrow.classList.add('arrowUp');
        upArrow.addEventListener('click', function(el){
            smoothScroll('.hero-section', 2000);
        })
    }
    else{
        upArrow.classList.remove('arrowUp');
        upArrow.addEventListener('click', function(){
            smoothScroll('.who', 2000);
        });
    }
});


    //##### WHAT APPEAR
const whatCards = document.querySelector('.whatLangue-container');
const screenPosition = window.scrollY;



