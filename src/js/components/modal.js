export const modal = () => {
    // モーダルトリガー（開くボタン）のイベント設定
    const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
    modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            const modalSelector = trigger.getAttribute("data-modal-trigger");
            const modal = document.querySelector(modalSelector);
            if (modal) {
                modal.classList.add("modal--active");
            }
        });
    });
    
    // モーダルのクローズ（オーバーレイや閉じるボタン）のイベント設定
    const modals = document.querySelectorAll("[data-modal]");
    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target.hasAttribute("data-modal-close")) {
                modal.classList.remove("modal--active");
            }
        });
    });
};
