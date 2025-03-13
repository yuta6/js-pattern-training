export const tabs = () => {
    const tabContainer = document.querySelector("[data-tab]");
    if (!tabContainer) return;

    // タブナビゲーションラッパー（アンダーラインの親要素）
    const navWrapper = tabContainer.querySelector("[data-tab-nav]");
    const tabItems = tabContainer.querySelectorAll("[data-tab-target]");
    const tabPanels = tabContainer.querySelectorAll("[data-tab-panel]");
    const underline = tabContainer.querySelector("[data-tab-underline]");

    const tabActiveClassName = "tab__item--active";
    // アンダーラインの位置・幅を更新する関数
    const updateUnderline = () => {
        const activeTab = tabContainer.querySelector("."+tabActiveClassName);
        if (!activeTab || !underline) return;
        const navRect = navWrapper.getBoundingClientRect();
        const activeRect = activeTab.getBoundingClientRect();
        const left = activeRect.left - navRect.left;
        const width = activeRect.width;
        underline.style.left = left + "px";
        underline.style.width = width + "px";
    };

    // 初期位置を設定
    updateUnderline();
    // ウィンドウリサイズ時にも更新
    window.addEventListener("resize", updateUnderline);

    tabItems.forEach((item) => {
        item.addEventListener("click", () => {
            // すべてのタブから active クラスを削除し、クリックされたタブに付与
            tabItems.forEach((tab) => {
                const isActive = tab === item;
                tab.classList.toggle(tabActiveClassName, isActive);
            });


            // 対応するパネルの表示切替
            const targetId = item.getAttribute("data-tab-target");
            tabPanels.forEach((panel) =>
                panel.classList.remove("tab__panel--active")
            );
            const targetPanel = tabContainer.querySelector(
                `[data-tab-panel="${targetId}"]`
            );
            if (targetPanel) {
                targetPanel.classList.add("tab__panel--active");
            }

            updateUnderline();
        });
    });
};
