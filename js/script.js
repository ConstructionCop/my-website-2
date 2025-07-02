document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const slideTitle = document.querySelector('.slide-title');
    const slideNumber = document.querySelector('.slide-number');
    const yearDescription = document.querySelector('.year-description');
    const clientDescription = document.querySelector('.client-description');
    const dutyDescription = document.querySelector('.duty-description');
    const toolsDescription = document.querySelector('.tools-description');
    const slideActionButton = document.querySelector('.slide-action-button');
   
    // Array of titles corresponding to each slide
    const slideTitles = [
      'Model<br>Photoshoot',
      'Vision Street Wear Newsletters',
      'Croyds Videography',
      'Title for Slide 4',
      'Title for Slide 5'
    ];

     // Corresponding slide numbers
 const slideNumbers = [
    '01',
    '02',
    '03',
    '04',
    '05'
  ];

  const yearDescriptions = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024'
    
  ];

  const clientDescriptions = [
    'Vision Street Wear',
    'RIFTE Studios',
    'Denim Society',
    '2023',
    '2024'
    
  ];

  const dutyDescriptions = [
    'PHOTOGRAPHER CHOREOGRAPHER PHOTO EDITOR',
    '2021',
    '2022',
    '2023',
    '2024'
    
  ];

  const toolsDescriptions = [
    'NIKON D650 PHOTOSHOP LIGHTROOM',
    '2021',
    '2022',
    '2023',
    '2024'
    
  ];

  const slideLinks = [
    'https://link-for-slide-1.com',
    'https://link-for-slide-2.com',
    'https://link-for-slide-3.com',
    'https://link-for-slide-4.com',
    'https://link-for-slide-5.com'
];
   
    let currentIndex = 0;
   
    // Reset slides
    function resetSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
          slide.classList.add('active');
          // Update the title when slide changes
          slideTitle.innerHTML = slideTitles[index];
          slideNumber.textContent = slideNumbers[index];
          yearDescription.textContent = yearDescriptions[index];
          clientDescription.textContent = clientDescriptions[index];
          dutyDescription.textContent = dutyDescriptions[index];
          toolsDescription.textContent = toolsDescriptions[index];
          slideActionButton.onclick = () => {
                window.open(slideLinks[index], '_blank');}
        }
      });
    }
   
    // Update progress indicators
    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
   
    // Next slide functionality
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      resetSlides();
      updateIndicators();
    }
   
    // Previous slide functionality
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      resetSlides();
      updateIndicators();
    }
   
    // Initial setup
    resetSlides();
   
    // Add click listeners to navigation buttons
    navRight.addEventListener('click', nextSlide);
    navLeft.addEventListener('click', prevSlide);
   
    // Add click listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        resetSlides();
        updateIndicators();
      });
    });
   });