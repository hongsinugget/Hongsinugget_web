// ========================================
// 전체 초기화 스크립트 (IIFE)
// ========================================
(() => {
  'use strict';

  // DOM 완전 로드 후 초기화
  document.addEventListener('DOMContentLoaded', () => {
    console.log('=== DOM Loaded ===');

    // 요소 가져오기
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalTitle = modal?.querySelector('.modal-title');
    const modalImage = modal?.querySelector('.modal-image');
    const modalDesc = modal?.querySelector('.modal-subtitle');
    const modalBody = modal?.querySelector('.modal-description');
    const modalTags = modal?.querySelector('.modal-tags');
    const modalClose = modal?.querySelector('.close');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const header = document.getElementById('header');
    const typingEl = document.getElementById('typing-text');
    const logo = document.querySelector('.logo');

    console.log('Filter buttons found:', filterBtns.length);
    console.log('Project cards found:', cards.length);
    console.log('Modal found:', modal ? 'YES' : 'NO');

    /* -------------------------
       1) 필터 버튼 기능
       ------------------------- */
    filterBtns.forEach((btn, index) => {
      console.log(`Button ${index}: data-filter="${btn.getAttribute('data-filter')}"`);

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('🔵 Button clicked:', btn.getAttribute('data-filter'));

        // active 토글
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.getAttribute('data-filter');

        // 카드 필터링
        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          console.log(`Card category: ${cat}, Filter: ${filter}`);

          if (filter === 'all' || cat === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    /* -------------------------
       2) 모달: View More 클릭 시
       ------------------------- */

    // 프로젝트별 이미지 데이터 (하드코딩)
    const PROJECT_IMAGES = {
      '김제페이': [
        '../public/images/gimjepay/gimje_2.png',
        '../public/images/gimjepay/gimje_3.png',
        '../public/images/gimjepay/gimje_map.png'
      ],
      '지평선 전생테스트': [
        '../public/images/jipyeong/jipyeong_main.png',
        '../public/images/jipyeong/jipyeong_2.png',
        '../public/images/jipyeong/jipyeong_3.png',
        '../public/images/jipyeong/jipyeong_4.png'
      ],
      'NULLZ 크리에이터': [
        '../public/images/nullz/nullz_main.png',
        '../public/images/nullz/nullz_1.png',
        '../public/images/nullz/nullz_2.png',
        '../public/images/nullz/nullz_3.png'
      ],
      '청년마케터 서포터즈': [
        '../public/images/marketer/marketer_main.png',
        '../public/images/marketer/marketer_1.png',
        '../public/images/marketer/marketer_2.png',
        '../public/images/marketer/marketer_3.png'
      ],
      'SilentMonster': [
        '../public/images/silentmonster/silentmonster_main.png',
        '../public/images/silentmonster/silentmonster_1.png',
        '../public/images/silentmonster/silentmonster_2.png',
        '../public/images/silentmonster/silentmonster_3.png'
      ],
      '디자인작업물': [
        '../public/images/designer/designer_main.png',
        '../public/images/designer/designer_1.png',
        '../public/images/designer/designer_2.png',
        '../public/images/designer/designer_3.png',
        '../public/images/designer/designer_4.png'
      ],

    };

    document.querySelectorAll('.view-more').forEach((vm, index) => {
      console.log(`View More button ${index} found`);

      vm.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('🟢 View More clicked!');

        // 가장 가까운 project-card 찾기
        const card = vm.closest('.project-card');
        if (!card || !modal) {
          console.error('Card or Modal not found');
          return;
        }

        const title = card.querySelector('.project-title')?.textContent || '';
        const fullDesc = card.querySelector('.modal-full-desc')?.innerHTML;
        const shortDesc = card.querySelector('.project-desc')?.innerHTML || '';
        const desc = fullDesc || shortDesc;
        const cardImageSrc = card.querySelector('.project-image img')?.src || '';

        console.log('Opening modal with:', title);

        // 모달 텍스트 채우기
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.innerHTML = shortDesc; // Subtitle gets short description
        if (modalBody) modalBody.innerHTML = fullDesc || ''; // Body gets full description

        // 모달 이미지 처리 (슬라이더)
        const modalImagesContainer = modal.querySelector('.modal-images');
        const imageDotsContainer = modal.querySelector('.image-dots');

        if (modalImagesContainer) {
          modalImagesContainer.innerHTML = ''; // 기존 이미지 초기화

          // 이미지 리스트 결정
          let images = [];
          if (PROJECT_IMAGES[title.trim()]) {
            images = PROJECT_IMAGES[title.trim()];
          } else if (cardImageSrc) {
            images = [cardImageSrc];
          }

          // 이미지 요소 생성
          images.forEach((src, idx) => {
            const div = document.createElement('div');
            div.className = 'modal-image';
            div.style.display = 'flex';

            const img = document.createElement('img');
            img.src = src;
            img.alt = title;

            div.appendChild(img);
            modalImagesContainer.appendChild(div);
          });

          // 슬라이더 상태
          let currentIndex = 0;
          let swipeStartX = 0;
          let swipeEndX = 0;
          let isDragging = false;

          // 슬라이드 업데이트 함수
          const updateSlider = (index) => {
            // 인덱스 루프 처리
            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;

            currentIndex = index;

            // 이미지 이동 (transform)
            const allImages = modalImagesContainer.querySelectorAll('.modal-image');
            allImages.forEach((imgDiv) => {
              imgDiv.style.transform = `translateX(-${currentIndex * 100}%)`;
            });

            // 도트 업데이트
            const allDots = imageDotsContainer.querySelectorAll('.image-dot');
            allDots.forEach((d, i) => {
              if (i === currentIndex) d.classList.add('active');
              else d.classList.remove('active');
            });
          };

          // 스와이프 처리 함수
          const handleSwipe = () => {
            const threshold = 50; // 스와이프 감지 최소 거리
            if (swipeEndX < swipeStartX - threshold) {
              // 왼쪽으로 스와이프 -> 다음 이미지
              updateSlider(currentIndex + 1);
            }
            if (swipeEndX > swipeStartX + threshold) {
              // 오른쪽으로 스와이프 -> 이전 이미지
              updateSlider(currentIndex - 1);
            }
          };

          // 터치 이벤트
          modalImagesContainer.addEventListener('touchstart', (e) => {
            swipeStartX = e.changedTouches[0].screenX;
          });

          modalImagesContainer.addEventListener('touchend', (e) => {
            swipeEndX = e.changedTouches[0].screenX;
            handleSwipe();
          });

          // 마우스 이벤트 (드래그 스와이프)
          modalImagesContainer.addEventListener('mousedown', (e) => {
            e.preventDefault(); // 텍스트 선택/이미지 드래그 방지
            isDragging = true;
            swipeStartX = e.screenX;
            modalImagesContainer.style.cursor = 'grabbing';
          });

          modalImagesContainer.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            swipeEndX = e.screenX;
            modalImagesContainer.style.cursor = 'grab';
            handleSwipe();
          });

          modalImagesContainer.addEventListener('mouseleave', () => {
            if (isDragging) {
              isDragging = false;
              modalImagesContainer.style.cursor = 'grab';
            }
          });

          // 커서 스타일 설정
          modalImagesContainer.style.cursor = 'grab';

          // 초기 상태 설정
          updateSlider(0);

          // 도트 생성 및 이벤트
          if (imageDotsContainer) {
            imageDotsContainer.innerHTML = '';
            if (images.length > 1) {
              images.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.className = `image-dot ${idx === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                  updateSlider(idx);
                });
                imageDotsContainer.appendChild(dot);
              });
            }
          }
        }

        // 기본 태그 설정
        // 태그 설정
        if (modalTags) {
          modalTags.innerHTML = '';
          const cardTags = card.querySelectorAll('.project-tags span');

          if (cardTags.length > 0) {
            cardTags.forEach(tag => {
              const span = document.createElement('span');
              span.textContent = tag.textContent;
              modalTags.appendChild(span);
            });
          } else {
            // 태그가 없는 경우 기본 태그 또는 숨김 처리 (현재는 기본 태그 유지)
            const defaultTags = ['Figma', 'Html/CSS', 'JavaScript'];
            defaultTags.forEach(t => {
              const span = document.createElement('span');
              span.textContent = t;
              modalTags.appendChild(span);
            });
          }
        }

        // 모달 열기
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open'); // Use class for better control
        console.log('✅ Modal opened');
      });
    });

    // 모달 닫기
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        console.log('🔴 Close button clicked');
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          console.log('🔴 Modal background clicked');
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('modal-open');
        }
      });
    }

    /* -------------------------
       3) 햄버거 메뉴 (mobile)
       ------------------------- */
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('active');
      });
    }

    // nav 클릭 시 닫기
    navAnchors.forEach(a => {
      a.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      });
    });

    /* -------------------------
       4) 스크롤 - 헤더 & 섹션 활성화
       ------------------------- */
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinksAll = Array.from(document.querySelectorAll('.nav-links a'));

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 헤더 scrolled class
          if (header) {
            if (window.scrollY > 100) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }
          }

          // 현재 섹션 하이라이트
          let current = '';
          sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (window.scrollY >= top - 200 && window.scrollY < top + height - 200) {
              current = sec.id;
            }
          });

          navLinksAll.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    /* -------------------------
       5) 로고 클릭 시 맨 위로
       ------------------------- */
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        history.pushState(null, null, window.location.pathname);
      });
    }

    /* -------------------------
       6) 타이핑 애니메이션
       ------------------------- */
    const roles = ["전략", "디자인", "구현"];
    let rIndex = 0, chIndex = 0, deleting = false;

    function typeLoop() {
      if (!typingEl) return;
      const current = roles[rIndex];

      if (!deleting) {
        chIndex++;
        typingEl.textContent = current.slice(0, chIndex);
        if (chIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1200);
          return;
        }
      } else {
        chIndex--;
        typingEl.textContent = current.slice(0, chIndex);
        if (chIndex === 0) {
          deleting = false;
          rIndex = (rIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 70 : 120);
    }
    setTimeout(typeLoop, 600);

    /* -------------------------
       7) 스무스 스크롤
       ------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* -------------------------
       8) Contact form
       ------------------------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다!');
        contactForm.reset();
      });
    }

    /* -------------------------
       9) 이미지 도트 네비게이션
       ------------------------- */
    const imageDots = document.querySelectorAll('.image-dot');
    let currentImageIndex = 0;

    imageDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        imageDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        currentImageIndex = index;
      });
    });

  }); // DOMContentLoaded end

  // ========================================
  // 즉시 실행 가능한 이벤트들
  // ========================================

  // 마우스 팔로우 효과
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
  });

})(); // IIFE end