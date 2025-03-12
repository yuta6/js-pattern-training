export const accordion = () => {
    const animTiming = {
        duration: 300,
    };

    const closingAnimKeyframes = (content) => [
        { height: content.offsetHeight + "px" },
        { height: 0 },
    ];

    const openingAnimKeyframes = (content) => [
        { height: 0 },
        { height: content.offsetHeight + "px" },
    ];

    const accordionItems = document.querySelectorAll("[data-accordion-item]");

    accordionItems.forEach((item) => {
        const trigger = item.querySelector("[data-accordion-summary]");
        const target = item.querySelector("[data-accordion-content]");

        if (!trigger || !target) {
            console.warn(' "data-accordion-summary"や"data-accordion-content"をもつ要素が必要です', item);
            return;
        }

        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            const isOpen = item.open;
            if (isOpen) {
                const closingAnim = target.animate(
                    closingAnimKeyframes(target),
                    animTiming
                );
                closingAnim.onfinish = () => {
                    item.open = false;
                };
            } else {
                item.open = true;
                const openingAnim = target.animate(
                    openingAnimKeyframes(target),
                    animTiming
                );
            }
        });
    });
};
