let menu = document.querySelector('.expand').addEventListener('click',show_menu);

let count = 0;
function show_menu(){
    count++;
    if(count % 2 == 1){

        // document.querySelector('.side-menu').style.display = 'block';;
        document.querySelector('.side-menu').style.transform = "translateY(0px)";
        document.querySelector('.side-menu').style.transition = ".3s ease-in";
        document.querySelector('.side-menu').style.opacity = 1;
    }else{
        
        // document.querySelector('.side-menu').style.display = 'none';
        document.querySelector('.side-menu').style.transform = "translateY(-350px)";
    }
}