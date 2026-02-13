

document.addEventListener("DOMContentLoaded", (e)=>{
    const {animate, stagger} = Motion
    const buttons = document.querySelectorAll(".nes-btn")
    const text = document.querySelectorAll(".nes-text")
    animate(buttons, {
        y: [50, 0],
        opacity: [0, 1],
        
    }, {
        delay: stagger(0.3)
    })
    animate(text, {
        y: [50, 0],
        opacity: [0, 1],
        
    }, {
        delay: stagger(0.1)
    })
    animate(".sun", {
        scale: [1.50, 1]
    }, {
        type: "spring",
        stiffness: 300
    })

})


const { animate, hover, press } = Motion;

hover(".nes-btn", (element) => {
  animate(element, {
    scale: 1.05,
  });
  return () => animate(element, { scale: 1 });
});
press(".nes-btn", (element) => {
  animate(element, {
    scale: 0.8,
  });
  return () => animate(element, { scale: 1 });
});


press(".icons", (element) => {
  animate(element, {
    scale: 0.8,
  });
  return () => animate(element, { scale: 1 });
});


