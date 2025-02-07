export const tabs = () => {
    const tabContainer = document.querySelector('[data-tab]');
    if (!tabContainer) return;

    const tabItems = tabContainer.querySelectorAll('[data-tab-item]');
    const tabPanels = tabContainer.querySelectorAll('[data-tab-panel]');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            tabItems.forEach(tabItem => tabItem.classList.remove('tab__item--active'));
            // クリックされたタブに active クラスを付与
            item.classList.add('tab__item--active');

            const target = item.getAttribute('data-tab-target');

            // すべてのパネルから active クラスを削除
            tabPanels.forEach(panel => panel.classList.remove('tab__panel--active'));
            // 対応するパネルを表示
            const targetPanel = tabContainer.querySelector(`[data-tab-panel="${target}"]`);
            if (targetPanel) {
                targetPanel.classList.add('tab__panel--active');
            }
        });
    });
}
