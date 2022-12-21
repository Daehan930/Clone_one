


window.addEventListener('load',function(){
    play();
    // console.log(this.window.pageYOffset)


    const hamBtn = document.querySelector('.btn_all_menu'),
        hideBar = document.querySelector('.hidebar')
        


    hamBtn.addEventListener('click',function(){

        
        hideBar.style="display: block; position: fixed; right: 0; top: 0; background-color: white; height: 100vh; width:200px;" // css에 적어주기
        })
    
})
let mainTit01 = document.querySelector('.mainTitWrap');
function play (num){ 
    let mainTit01 = document.querySelector('.mainTitWrap'),
        mainTit02 = document.querySelector('.mcSec_one'),
        mainTit03 = document.querySelector('.mcSec_two'),
        mainTit04 = document.querySelector('.mcSec_three'),
        mainTit05 = document.querySelector('.mcSec2_list'),
        mainTit06 = document.querySelector('.inner3'),
        mainTit07 = document.querySelector('.mcSec4');

        // const mcSec = document.querySelectorAll('.mcSec > div')
        // let element2 = document.querySelector('.mcSec_one');
        // let elementTop2 = window.pageYOffset + element2.getBoundingClientRect().top;
        // console.log(elementTop2,'여기') // 1000

        //scroll
    // let arr = [];

 
    // function sizeplay (num) {
    //     // let element2 = document.querySelector(`.${num}`);
    //     let elementTop2 = window.pageYOffset + num.getBoundingClientRect().top;
    //     console.log(elementTop2,'여기') // 1000

    // arr.push(num)
    // // arr.push(Math.floor(elementTop2))

    // }
    // sizeplay(mainTit01)
    // mcSec.forEach(function(key){
    //     sizeplay(key)
    // })
    // sizeplay(mainTit05)
    // sizeplay(mainTit06)
    // sizeplay(mainTit07)
    // console.log(arr)
    


    // mcSec.forEach(function(el,key){
    //     arr.push(mcSec[key].offsetTop)
    //     console.log(key)
    //     console.log(arr);
    //     console.log(arr[0])
    //     console.log(arr[1])
    //     console.log(arr[2])
    
    // })

    //console.log(offsetTop)
    
    
    //console.log(this.window.pageYOffset) // 보고있는 스크롤바 높이 /

    
    if(this.window.pageYOffset > 4700){
        mainTit07.style = "opacity:1; transition: 2s;"
    }
    else if(this.window.pageYOffset > 3600){
        mainTit06.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
    }
    else if(this.window.pageYOffset > 2300){
        // document.querySelector('.mcSec2_list')
        // console.log(2,'나옴')
        mainTit05.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
    }
     else if(this.window.pageYOffset > 1600){
         mainTit04.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
     }
     else if(this.window.pageYOffset > 1000){
         mainTit03.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
     }
     else if(this.window.pageYOffset > 500){
         mainTit02.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
     }
    else if(this.window.pageYOffset > 200){
        mainTit01.style = "opacity:1; transform: translateX(0px);transition: 1s ease-in;"
    }
}

this.window.addEventListener('scroll',play)

