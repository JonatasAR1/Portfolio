function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal('.delay1',{ delay: 200})
  sr.reveal('.delay2',{ delay: 250})
  sr.reveal('.delay3',{ delay: 600})
  sr.reveal('.intervalCard',{ interval: 380})

}

initScrollReveal();

