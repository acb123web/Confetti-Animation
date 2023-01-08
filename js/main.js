function hoverEffect(ele){
    /*on mouse enter confetti should fall*/
    ele.addEventListener('mouseenter', function(){
        /*you may think where i have done startConfetti(), it's already there in plugin*/
        startConfetti();
    });

    /* now you can see confetti is falling but we need to
     stop it after 
    when we remove our mouse from the card*/
    ele.addEventListener('mouseleave', function(){
        stopConfetti();
    });

}

/*we have called confetti animation but on hovering the cards we nee that animation*/
const card = document.querySelectorAll('.card');

for(const cards of card){
    hoverEffect(cards);
}