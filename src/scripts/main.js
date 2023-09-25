import '../styles/main.css';

(function () {
    'use strict';

    const experiences = document.querySelectorAll('.xp');
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    const activateExperience = experience => {
        experience.classList.add('read');
        experience.classList.remove('unread');
        if (experience.classList.contains('read')) {
            const bottomBar = experience?.previousElementSibling?.querySelector('.bottom-bar');
            bottomBar?.classList.add('passed');
        }
    };

    const deactivateExperience = experience => {
        if (experience.classList.contains('unread')) {
            const bottomBar = experience?.previousElementSibling?.querySelector('.bottom-bar');
            bottomBar?.classList.remove('passed');
        }
        experience.classList.remove('read');
        experience.classList.add('unread');
    };

    const activateSection = section => {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelector(`a[href*=${section.id}]`)?.classList.add('active');
    }

    const applyCallbackToElement  = (elementForTop, heightFactor, bellowCallback, aboveCallback = null) => {
        if (elementForTop.getBoundingClientRect().top <= windowHeight * heightFactor) {
            bellowCallback()
        } else if(aboveCallback) {
            aboveCallback()
        }
    }

    const handleScroll = () => {
        sections.forEach(section => {
            applyCallbackToElement (
                section,
                0.5,
                () => activateSection(section)
                )
        });
        experiences.forEach(experience => {
            applyCallbackToElement (
                experience.lastElementChild,
                0.4,
                () => activateExperience(experience),
                () => deactivateExperience(experience)
            )

        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
})();