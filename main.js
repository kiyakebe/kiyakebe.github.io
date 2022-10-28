const icons = document.querySelectorAll('.social-icon')

const observer = new IntersectionObserver(entries => {
    let x = 0
    entries.forEach(entry => {
        x += 0.04
        entry.target.classList.toggle("show_icon", entry.isIntersecting)
        entry.target.style.animationDelay = x + "s"
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    rootMargin: "-50px"
})
icons.forEach(icon => {
    observer.observe(icon)
})

// top icon observer
const socialIcon = document.querySelectorAll('.icons')

const iconObserver = new IntersectionObserver(entries => {
    let x = 0
    entries.forEach(entry => {
        x += 0.06
        entry.target.classList.toggle("animate_icons", entry.isIntersecting)
        entry.target.style.animationDelay = x + "s"
        if (entry.isIntersecting) iconObserver.unobserve(entry.target)
    })
})
socialIcon.forEach(icon => {
    iconObserver.observe(icon)
})
