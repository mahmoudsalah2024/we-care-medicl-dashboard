const navButtons = document.querySelectorAll('.navlink');
const submenuLists = document.querySelectorAll('.navlink .submenu');

function showAndHide(param){

    let id = document.getElementById(param);
    const submenuList = id.querySelector('.submenu');
    
    if(submenuList.classList.contains('hideSection')){
        submenuLists.forEach(ele => {
            ele.classList.add('hideSection')
            ele.classList.remove('showSection')
            submenuList.classList.remove('hideSection')
            submenuList.classList.add('showSection')
        })
    }else{
        submenuList.classList.remove('showSection')
        submenuLists.forEach(ele => {
            ele.classList.add('hideSection')
            submenuList.classList.add('hideSection')
        })
    }
}

const header = document.querySelector('header');
const menutoggle = document.querySelector('.menutoggle');

menutoggle.addEventListener('click', ()=> {
    // header.classList.toggle('showheader');
    if(header.classList.contains('showheader')){
        header.classList.remove('showheader')
        header.classList.add('hideheader')
    }else{
        header.classList.add('showheader')
        header.classList.remove('hideheader')
    }
})


var urlPage = window.location.pathname;
var pageName = urlPage.split("/").pop();
var categoryName = urlPage.split("/")[2];
var PureName = pageName.split('.html')[0];
var pageSpaceName = PureName.replace(/([a-z])([A-Z])/g, '$1 $2')

console.log( urlPage );
console.log( pageName );
console.log( PureName );
console.log( categoryName);
if(urlPage === "/"){
    var categoryPage = document.querySelector(".branchLink #currantCatogry").innerText = '/';
    var currantPage = document.querySelector(".branchLink #currantPage").innerText = "Main Dashboard";
}else{
var categoryPage = document.querySelector(".branchLink #currantCatogry").innerText = categoryName;
var currantPage = document.querySelector(".branchLink #currantPage").innerText = pageSpaceName;
}



