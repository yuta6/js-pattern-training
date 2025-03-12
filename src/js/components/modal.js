export const modal = () => {
    const modalTriggers = document.querySelectorAll("[data-modal-trigger]");

    modalTriggers.forEach((trigger) => {
        const modal = document.querySelector(`[data-modal-id="${trigger.dataset.modalTrigger}"]`);
        if (!modal)return;

        trigger.addEventListener("click", () => {
            modal.showModal();
        });

        const closeButton = modal.querySelector("[data-modal-close]");
        if (!closeButton) return;

        closeButton.addEventListener("click", () => {
            modal.close();
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
};
