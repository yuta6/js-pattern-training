export const carousel = () => {
  // data-carousel 属性を持つ全てのカルーセルを取得
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(carousel => {
    const viewport = carousel.querySelector('.carousel__viewport');
    const slides = carousel.querySelectorAll('[data-carousel-slide]');
    const btnPrev = carousel.querySelector('[data-carousel-button="prev"]');
    const btnNext = carousel.querySelector('[data-carousel-button="next"]');
    const dots = carousel.querySelectorAll('[data-carousel-dot]');

    let currentIndex = 0;

    // カルーセルの表示を更新する関数
    const updateCarousel = () => {
      // 現在のインデックスに合わせて viewport を左にシフト（100%ずつ）
      viewport.style.transform = `translateX(-${currentIndex * 100}%)`;

      // ドットの状態を更新
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('carousel__dot--active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('carousel__dot--active');
          dot.removeAttribute('aria-current');
        }
      });
    }

    // 「前へ」ボタンのクリックイベント
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    // 「次へ」ボタンのクリックイベント
    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
    });
  });
}
