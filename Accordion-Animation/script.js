<script>
    let currentIndex = 1;
    let userInteracted = false;
    jQuery(document).ready(function($) {
        // Initially open the first accordion
        const firstAccordion = $(".sub-accordion").first().find(".accordion-cont");
        firstAccordion.addClass("open");
    $(".accordion-head").on("click", function() {
        toggleAccordion(this);
    });
});

const accordions = document.querySelectorAll('.main-accordion');

function autoExpand() {
    if (!userInteracted) {
        accordions.forEach((accordion, index) => {
    const content = accordion.querySelector('.accordion-cont');
    if (index === currentIndex) {
      content.classList.add('open');
    } else {
      content.classList.remove('open');
    }
  });
  
  currentIndex = (currentIndex + 1) % accordions.length;
}
    }


// Automatically expand and collapse accordions in sequence
setInterval(autoExpand, 5000);

function toggleAccordion(header) {
  // Disable automatic function after interaction
  userInteracted = true;

  // Get the accordion content of the clicked header
  const content = header.nextElementSibling;
  
  // Check if the clicked accordion is already open
  const isOpen = content.classList.contains('open');
  
  // Close all accordions first
  accordions.forEach(accordion => {
    const otherContent = accordion.querySelector('.accordion-cont');
    otherContent.classList.remove('open');
  });
  
  // If the clicked accordion was not open, expand it
  if (!isOpen) {
    content.classList.add('open');
  }

  // Stop the automatic function after user interaction
  clearInterval(autoExpandInterval);
}

</script>
