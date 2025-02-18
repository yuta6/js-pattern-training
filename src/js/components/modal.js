export const modal = () => {
    const modalTrigger = document.querySelector("[data-modal-trigger]");
    const modal = document.querySelector("[data-modal]");

    if (!modalTrigger || !modal) return;
    modalTrigger.addEventListener("click", () => {
        modal.showModal();
    });

    const closeButton = modal.querySelector("[data-modal-close]");

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.close();
        });
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
};
