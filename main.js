window.addEventListener('scroll', () => {
     document.querySelector('header').classList.toggle 
      ('window_scroll' , window.scrollY > 0)   
})
