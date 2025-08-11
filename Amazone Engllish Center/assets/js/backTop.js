const backToTopBtn = document.getElementById('backToTopBtn')
window.addEventListener('scroll', function(){
    if(document.body.scrollTop > 100 || this.document.documentElement.scrollTop > 100){
        backToTopBtn.style.display = 'block'
    }else{
        backToTopBtn.style.display = 'none'
    }
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})