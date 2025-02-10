export const accordion = () => {

    const animTiming = {
        duration: 300,
    };

    const closingAnimKeyframes = (content) => [
        { height: content.offsetHeight + "px" },
        { height: "0px" },
    ];

    const openingAnimKeyframes = (content) => {
        const startHeight = content.offsetHeight;
        return [
            { height: "0px" },
            { height: startHeight + "px" },
        ];
    };

    const accordionItems = document.querySelectorAll("[data-accordion-item]");

    accordionItems.forEach((item) => {
        const trigger = item.querySelector("[data-accordion-summary]");
        const target = item.querySelector("[data-accordion-content]");

        target.style.overflow = "hidden";

        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            if (item.hasAttribute("open")) {

                const currentHeight = target.offsetHeight;
                target.style.height = currentHeight + "px";

                const closingAnim = target.animate(closingAnimKeyframes(target), animTiming);
                closingAnim.onfinish = () => {
                    item.removeAttribute("open");
                    target.style.height = "";
                };
            } else {

                item.setAttribute("open", "");

                target.style.height = "0px";

                requestAnimationFrame(() => {
                    const openingAnim = target.animate(openingAnimKeyframes(target), animTiming);
                    openingAnim.onfinish = () => {
                        target.style.height = "";
                    };
                });
            }
        });
    });
};
