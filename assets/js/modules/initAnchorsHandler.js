// export const initAnchorsHandler = (parent) => {
//     const anchorsContent = document.querySelector(parent);
//     if (!anchorsContent) return;

//     const anchorsBtns = [...anchorsContent.querySelectorAll('.js-anchor-btn')];
//     const anchorsTargets = [
//         ...anchorsContent.querySelectorAll('.js-anchor-target'),
//     ];
//     const header = document.querySelector('.js-header');

//     if (!anchorsBtns.length || !anchorsTargets.length) return;

//     let isScrollingManual = false;

//     const getHeaderOffset = (isScrollingUp) => {
//         if (!header) return 0;
//         return isScrollingUp ? 200 : 40;
//     };

//     anchorsBtns.forEach((btn, i) => {
//         btn.addEventListener('click', (e) => {
//             e.preventDefault();
//             const target = anchorsTargets[i];
//             if (!target) return;

//             isScrollingManual = true;

//             const targetTop =
//                 target.getBoundingClientRect().top + window.scrollY;
//             const isScrollingUp = targetTop < window.scrollY;
//             const offset = getHeaderOffset(isScrollingUp);

//             anchorsBtns.forEach((el) => el.classList.remove('is-active'));
//             btn.classList.add('is-active');
//             btn.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });

//             window.scrollTo({
//                 top: targetTop - offset,
//                 behavior: 'smooth',
//             });

//             const checkScrollEnd = () => {
//                 isScrollingManual = false;
//                 window.removeEventListener('scrollend', checkScrollEnd);
//             };

//             if ('onscrollend' in window) {
//                 window.addEventListener('scrollend', checkScrollEnd);
//             } else {
//                 setTimeout(() => {
//                     isScrollingManual = false;
//                 }, 800);
//             }
//         });
//     });

//     const observerOptions = {
//         root: null,
//         rootMargin: '-15% 0px -80% 0px',
//         threshold: 0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//         if (isScrollingManual) return;

//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const index = anchorsTargets.indexOf(entry.target);
//                 if (index !== -1) {
//                     anchorsBtns.forEach((btn) =>
//                         btn.classList.remove('is-active'),
//                     );
//                     anchorsBtns[index].classList.add('is-active');
//                 }
//             }
//         });
//     }, observerOptions);

//     anchorsTargets.forEach((target) => observer.observe(target));
// };

export const initAnchorsHandler = (parent) => {
    const anchorsContent = document.querySelector(parent);
    if (!anchorsContent) return;

    const anchorsBtns = [...anchorsContent.querySelectorAll('.js-anchor-btn')];
    const anchorsTargets = [
        ...anchorsContent.querySelectorAll('.js-anchor-target'),
    ];
    const header = document.querySelector('.js-header');

    if (!anchorsBtns.length || !anchorsTargets.length) return;

    let isScrollingManual = false;

    const getHeaderOffset = (isScrollingUp) => {
        if (!header) return 0;

        const isTablet = window.innerWidth <= 991;

        if (isTablet) {
            return isScrollingUp ? 170 : 50;
        }

        return isScrollingUp ? 160 : 60;
    };

    const setActiveBtn = (index) => {
        anchorsBtns.forEach((btn) => btn.classList.remove('is-active'));

        const activeBtn = anchorsBtns[index];
        if (!activeBtn) return;

        activeBtn.classList.add('is-active');

        activeBtn.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    };

    anchorsBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const target = anchorsTargets[i];
            if (!target) return;

            isScrollingManual = true;

            const targetTop =
                target.getBoundingClientRect().top + window.scrollY;

            const isScrollingUp = targetTop < window.scrollY;
            const offset = getHeaderOffset(isScrollingUp);

            setActiveBtn(i);

            window.scrollTo({
                top: targetTop - offset,
                behavior: 'smooth',
            });

            const checkScrollEnd = () => {
                isScrollingManual = false;
                window.removeEventListener('scrollend', checkScrollEnd);
            };

            if ('onscrollend' in window) {
                window.addEventListener('scrollend', checkScrollEnd);
            } else {
                setTimeout(() => {
                    isScrollingManual = false;
                }, 800);
            }
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            if (isScrollingManual) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = anchorsTargets.indexOf(entry.target);

                    if (index !== -1) {
                        setActiveBtn(index);
                    }
                }
            });
        },
        {
            root: null,
            rootMargin: '-15% 0px -80% 0px',
            threshold: 0,
        },
    );

    anchorsTargets.forEach((target) => observer.observe(target));
};
