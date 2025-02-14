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

        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            if (item.hasAttribute("open")) {
                const closingAnim = target.animate(
                    closingAnimKeyframes(target),
                    animTiming
                );
                closingAnim.onfinish = () => {
                    item.removeAttribute("open");
                };
            } else {
                item.setAttribute("open", "true");
                const openingAnim = target.animate(
                    openingAnimKeyframes(target),
                    animTiming
                );
            }
        });
    });
};
