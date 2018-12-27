const raf = (global.requrstAnimationFrame = cb => {
    setTimeout(cb, 0)
})

export default raf;