$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html .header' ,head);
$('footer').load('./inc.html .footer');


let idx = localStorage.idx || 0 ;

let color = [
    'rgba(181,22,27,.4)','rgba(42,186,32,.4)','rgba(142,43,228,.4)'
        ];

   // console.log(color[0])
    // console.log(`${color[idx]}`)

function head(){
    // $('.headerTop_right a').eq(idx).removeClass('active')
    // $('.headerTop_right a').eq(idx).addClass('active')

    $('.headerTop_right a').click(function(){
        // let idx = localStorage.idx || 0 ;
        
        let idx = $(this).index();
        localStorage.idx = idx;
        // $('.headerTop_right a').removeClass('active')    
        console.log(idx,'3')
        console.log(localStorage.idx)
        $('.headerTop_left a').css('background-color','inherit')
        $('.headerTop_right a').css('background-color','inherit')
        // $('.headerTop_right a').eq(idx).addClass('active')
        $('.headerTop_right a').eq(idx).css('background-color',`${color[idx]}`)

    })

    $('.headerTop_left a').click(function(e){
        e.preventDefault();

        let idx = $(this).index();
        localStorage.idx = idx;
        $('.headerTop_right a').css('background-color','inherit')
        $('.headerTop_left a').css('background-color','inherit')
        $('.headerTop_left a').css('background-color','rgba(13,13,180,.3)')

    })

    localStorage.clear()
}


