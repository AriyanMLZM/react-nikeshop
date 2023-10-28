const mouseTrail = (e) => {
  const trail = Array.from(document.getElementsByClassName('trail'))
  if (window.innerWidth > 600) {
    trail.forEach((el) => {
      const theel = el
      theel.style.visibility = 'visible'
    })
    trail.forEach((el) => {
      const theel = el
      theel.style.left = `${e.pageX}px`
      theel.style.top = `${e.pageY}px`
    })
    document.onmouseleave = () => {
      trail.forEach((el) => {
        const theel = el
        theel.style.visibility = 'hidden'
      })
    }
  }
}

export default mouseTrail
