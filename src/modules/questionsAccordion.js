const questionsAccordion = () => {
    const accordion = document.querySelector('.accordion');
    const accordionList = document.querySelectorAll('.accordion > ul > li > h2');

    accordion.addEventListener('click', (e) => {
        if (e.target.closest('.accordion > ul > li > h2')) {
            accordionList.forEach((elem) => {
                elem.classList.remove('msg-active');
                if (e.target == elem) {
                    elem.classList.add('msg-active');  
                    setTimeout(() => {
                        
                        while (elem.getBoundingClientRect().top < 10) {
                            document.documentElement.scrollTop = document.documentElement.scrollTop - 50;
                        }
                    }, 800);
                }
            });

        }

    });

};

export default questionsAccordion;