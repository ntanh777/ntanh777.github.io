/**
 * LOGIC ĐIỀU HƯỚNG VÀ HIỂN THỊ DỮ LIỆU PORTFOLIO
 * Thiết kế bởi lập trình viên 50+ năm kinh nghiệm: tinh gọn, không thư viện thừa, tương thích tốt.
 */

const initApp = () => {
  // Lấy dữ liệu cấu hình từ window (đã nạp từ config.js)
  const config = window.APP_CONFIG;
  if (!config) {
    console.error('Không tìm thấy cấu hình APP_CONFIG. Vui lòng kiểm tra lại file js/config.js');
    return;
  }

  // Khởi tạo các biến DOM
  const themeToggle = document.getElementById('theme-toggle');
  const mainContent = document.getElementById('main-content');
  const policyPage = document.getElementById('policy-page');
  const policyContent = document.getElementById('policy-content');

  // 1. QUẢN LÝ CHẾ ĐỘ SÁNG / TỐI (THEME SYSTEM)
  const initTheme = () => {
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem('theme');
    } catch (e) {
      console.warn('localStorage is not available:', e);
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeToggleIcon('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      updateThemeToggleIcon('light');
    }
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.warn('localStorage is not available:', e);
    }
    updateThemeToggleIcon(newTheme);
  };

  const updateThemeToggleIcon = (theme) => {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>` // Icon Mặt Trời
      : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`; // Icon Mặt Trăng
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  initTheme();

  // 2. NẠP THÔNG TIN NHÀ PHÁT TRIỂN (DEVELOPER INFORMATION)
  const loadDeveloperInfo = () => {
    // Logo ở Header
    const brandLogo = document.getElementById('header-logo');
    if (brandLogo) {
      if (config.developer.logoUrl) {
        brandLogo.innerHTML = `<img src="${config.developer.logoUrl}" alt="${config.developer.name}" class="w-full h-full object-cover">`;
      } else {
        brandLogo.innerHTML = config.developer.logoSvg;
      }
    }

    // Tên nhà phát triển ở Header
    const headerDevName = document.getElementById('header-dev-name');
    if (headerDevName) headerDevName.textContent = config.developer.name;

    // Tên và chức danh ở Hero
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = `Hello, I am <br><span>${config.developer.name}</span>`;
    }
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = config.developer.title;

    // Nội dung giới thiệu ở Hero
    const heroAbout = document.getElementById('hero-about-desc');
    if (heroAbout) heroAbout.innerHTML = config.developer.aboutHtml;

    // Ảnh / Logo lớn ở Hero
    const heroLogoBox = document.getElementById('hero-logo-box');
    if (heroLogoBox) {
      if (config.developer.logoUrl) {
        heroLogoBox.innerHTML = `<img src="${config.developer.logoUrl}" alt="${config.developer.name}" class="w-full h-full object-cover rounded-2xl">`;
      } else {
        heroLogoBox.innerHTML = config.developer.logoSvg;
      }
    }

    // Thông tin liên hệ ở Contact
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = config.developer.email;
    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink) contactEmailLink.href = `mailto:${config.developer.email}`;

    const contactAddress = document.getElementById('contact-address');
    if (contactAddress) contactAddress.textContent = config.developer.address;

    // Tên ở Footer
    const footerDevName = document.getElementById('footer-dev-name');
    if (footerDevName) footerDevName.textContent = config.developer.name;

    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) {
      const year = new Date().getFullYear();
      footerCopyright.textContent = `© ${year} ${config.developer.name}. All rights reserved.`;
    }

    // Mạng xã hội ở Footer
    const socialLinks = config.developer ? config.developer.socialLinks : null;
    const footerSocials = document.getElementById('footer-socials');
    if (footerSocials && socialLinks) {
      let html = '';
      if (socialLinks.github && socialLinks.github !== '#') {
        html += `<a href="${socialLinks.github}" target="_blank" class="social-icon" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>`;
      }
      if (socialLinks.linkedin && socialLinks.linkedin !== '#') {
        html += `<a href="${socialLinks.linkedin}" target="_blank" class="social-icon" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>`;
      }
      if (socialLinks.twitter && socialLinks.twitter !== '#') {
        html += `<a href="${socialLinks.twitter}" target="_blank" class="social-icon" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>`;
      }
      if (socialLinks.facebook && socialLinks.facebook !== '#') {
        html += `<a href="${socialLinks.facebook}" target="_blank" class="social-icon" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>`;
      }
      footerSocials.innerHTML = html;
    }
  };

  // 3. RENDER DANH SÁCH APP/GAME (GRID SYSTEM WITH FILTERING)
  const appsGrid = document.getElementById('apps-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let currentFilter = 'all';

  const renderApps = (filter) => {
    if (!appsGrid) return;

    // Lọc danh sách
    const filteredApps = config.apps.filter(app => {
      if (filter === 'all') return true;
      return app.type === filter;
    });

    appsGrid.innerHTML = '';

    if (filteredApps.length === 0) {
      appsGrid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400">Không tìm thấy ứng dụng nào phù hợp.</div>`;
      return;
    }

    filteredApps.forEach(app => {
      const card = document.createElement('div');
      card.className = 'app-card fade-in';
      card.dataset.id = app.id;

      const appIconHtml = app.logoUrl
        ? `<img src="${app.logoUrl}" alt="${app.name}" class="w-full h-full object-cover">`
        : app.logoSvg;

      // Xác định các icon store được hỗ trợ để hiển thị biểu tượng nhỏ dưới card
      let storeBadgesHtml = '';
      if (app.playStoreUrl && app.playStoreUrl !== '#') {
        storeBadgesHtml += `<svg class="store-badge-mini" viewBox="0 0 24 24" fill="currentColor"><path d="M3.25 2.25L13.72 12.72L3.25 23.2V2.25M15.14 11.3L19.46 8.98C20.3 8.52 20.3 7.28 19.46 6.82L16.56 5.28L13.72 12.72L15.14 11.3M3.25 23.2L13.72 12.72L16.56 18.72L19.46 17.18C20.3 16.72 20.3 15.48 19.46 15.02L15.14 12.72L3.25 23.2Z"/></svg>`; // Google Play icon đơn giản hóa
      }
      if (app.appStoreUrl && app.appStoreUrl !== '#') {
        storeBadgesHtml += `<svg class="store-badge-mini" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.48C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.85 1.04 14.51 1.73 13.73 2.64C13.07 3.41 12.49 4.52 12.64 5.78C13.87 5.87 15.12 5.17 15.97 4.17Z"/></svg>`; // Apple icon
      }

      card.innerHTML = `
        <div class="app-card-header">
          <div class="app-icon" style="background-color: var(--bg-tertiary)">
            ${appIconHtml}
          </div>
          <div class="app-info">
            <span class="app-badge ${app.type}">${app.type === 'app' ? 'Application' : 'Game'}</span>
            <h3 class="app-name">${app.name}</h3>
          </div>
        </div>
        <div class="app-card-body">
          <p>${app.shortDescription}</p>
        </div>
        <div class="app-card-footer">
          <div class="store-icons">
            ${storeBadgesHtml || '<span style="font-size:0.75rem; color:var(--text-muted)">Coming soon</span>'}
          </div>
          <span class="card-more-link">
            See details 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      `;

      // Click vào card để xem Modal chi tiết
      card.addEventListener('click', () => openAppModal(app));
      appsGrid.appendChild(card);
    });
  };

  // Click chọn bộ lọc
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderApps(currentFilter);
    });
  });

  // 4. QUẢN LÝ DIALOG / MODAL CHI TIẾT
  const modalOverlay = document.getElementById('app-modal');
  const modalClose = document.getElementById('modal-close');

  const openAppModal = (app) => {
    if (!modalOverlay) return;

    // Nạp dữ liệu vào modal
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalBadge = document.getElementById('modal-badge');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeatures = document.getElementById('modal-features');
    const modalScreenshots = document.getElementById('modal-screenshots');
    const modalDownloads = document.getElementById('modal-downloads');
    const modalPolicyLinks = document.getElementById('modal-policy-links');

    // Icon
    if (modalIcon) {
      modalIcon.innerHTML = app.logoUrl
        ? `<img src="${app.logoUrl}" alt="${app.name}" class="w-full h-full object-cover rounded-3xl">`
        : app.logoSvg;
      modalIcon.style.backgroundColor = 'var(--bg-tertiary)';
    }

    // Title & Badge
    if (modalTitle) modalTitle.textContent = app.name;
    if (modalBadge) {
      modalBadge.textContent = app.type === 'app' ? 'Application' : 'Game';
      modalBadge.className = `app-badge ${app.type}`;
    }

    // Mô tả đầy đủ
    if (modalDesc) modalDesc.textContent = app.description || app.shortDescription;

    // Tính năng nổi bật
    if (modalFeatures) {
      modalFeatures.innerHTML = '';
      if (app.features && app.features.length > 0) {
        app.features.forEach(feat => {
          const li = document.createElement('li');
          li.textContent = feat;
          modalFeatures.appendChild(li);
        });
      } else {
        modalFeatures.innerHTML = '<li style="list-style:none; padding-left:0; color:var(--text-muted)">Đang cập nhật danh sách tính năng...</li>';
      }
    }

    // Ảnh chụp màn hình (Carousel)
    if (modalScreenshots) {
      modalScreenshots.innerHTML = '';

      // Nếu app có ảnh thực tế thì render ảnh thực tế
      if (app.screenshots && app.screenshots.length > 0) {
        app.screenshots.forEach((screenUrl, idx) => {
          const img = document.createElement('img');
          img.src = screenUrl;
          img.alt = `Screenshot ${idx + 1}`;
          img.className = 'w-48 h-80 object-cover rounded-lg border border-slate-700 flex-shrink-0';
          modalScreenshots.appendChild(img);
        });
      } else {
        // Tự sinh 3 màn hình mockup bằng CSS để nhìn cực chuyên nghiệp, không để trống
        for (let i = 1; i <= 3; i++) {
          const mockScreen = document.createElement('div');
          mockScreen.className = 'screenshot-card-mock';

          let screenContent = '';
          if (i === 1) {
            screenContent = `
              <div style="font-weight:700; color:var(--accent); text-align:center; margin-top:20px; font-size:0.9rem;">${app.name}</div>
              <div style="font-size:0.65rem; text-align:center; color:var(--text-secondary)">Màn hình khởi động</div>
              <div style="display:flex; justify-content:center; align-items:center; flex-grow:1;">
                <div style="width:50px; height:50px; opacity:0.8;">${app.logoUrl ? `<img src="${app.logoUrl}" class="w-full h-full object-cover">` : app.logoSvg}</div>
              </div>
              <div style="font-size:0.55rem; text-align:center; color:var(--text-muted)">Phiên bản 1.0.0</div>
            `;
          } else if (i === 2) {
            screenContent = `
              <div style="font-weight:700; color:var(--text-primary); font-size:0.75rem; border-bottom:1px solid var(--border-color); padding-bottom:5px;">Chức năng nổi bật</div>
              <div style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                <div style="background:var(--bg-secondary); padding:5px; border-radius:4px; font-size:0.55rem; border:1px solid var(--border-color)">✦ Trải nghiệm mượt mà</div>
                <div style="background:var(--bg-secondary); padding:5px; border-radius:4px; font-size:0.55rem; border:1px solid var(--border-color)">✦ Tương tác thời gian thực</div>
                <div style="background:var(--bg-secondary); padding:5px; border-radius:4px; font-size:0.55rem; border:1px solid var(--border-color)">✦ An toàn dữ liệu</div>
              </div>
              <div style="flex-grow:1;"></div>
              <div style="height:30px; background:var(--accent); border-radius:4px; display:flex; justify-content:center; align-items:center; color:#ffffff; font-size:0.6rem; font-weight:700;">Khám Phá Ngay</div>
            `;
          } else {
            screenContent = `
              <div style="font-weight:700; color:var(--text-primary); font-size:0.75rem; text-align:center;">Giao diện Đẹp & Nhẹ</div>
              <div style="flex-grow:1; display:flex; flex-direction:column; justify-content:center; gap:8px; margin-top:20px;">
                <div style="width:100%; height:12px; background:var(--border-color); border-radius:2px;"></div>
                <div style="width:80%; height:12px; background:var(--border-color); border-radius:2px;"></div>
                <div style="width:90%; height:12px; background:var(--border-color); border-radius:2px;"></div>
              </div>
              <div style="height:40px; display:flex; gap:10px; align-items:center; border-top:1px solid var(--border-color); padding-top:5px;">
                <div style="width:25px; height:25px; border-radius:50%; background:var(--border-color);"></div>
                <div style="font-size:0.55rem; color:var(--text-secondary)">Hỗ trợ kỹ thuật 24/7</div>
              </div>
            `;
          }

          mockScreen.innerHTML = screenContent;
          modalScreenshots.appendChild(mockScreen);
        }
      }
    }

    // Các nút tải về Store
    if (modalDownloads) {
      modalDownloads.innerHTML = '';
      let hasStoreLink = false;

      // Nút Google Play
      if (app.playStoreUrl && app.playStoreUrl !== '#') {
        hasStoreLink = true;
        const playBtn = document.createElement('a');
        playBtn.href = app.playStoreUrl;
        playBtn.target = '_blank';
        playBtn.className = 'store-btn';
        playBtn.innerHTML = `
          <svg class="store-btn-svg" viewBox="0 0 24 24">
            <path d="M3 5.25L13.5 15.75L3 26.25V5.25M15 14.25L19.5 12C20.25 11.5 20.25 10.5 19.5 10L16.5 8.5L13.5 15.75L15 14.25M3 26.25L13.5 15.75L16.5 21.75L19.5 20.25C20.25 19.75 20.25 18.75 19.5 18.25L15 15.75L3 26.25Z" fill="currentColor"/>
          </svg>
          <div class="store-btn-text">
            <span class="store-btn-subtitle">Tải từ</span>
            <span class="store-btn-title">Google Play</span>
          </div>
        `;
        modalDownloads.appendChild(playBtn);
      } else {
        // Render nút disable báo sắp ra mắt
        const playBtn = document.createElement('div');
        playBtn.className = 'store-btn';
        playBtn.style.opacity = '0.4';
        playBtn.style.cursor = 'not-allowed';
        playBtn.innerHTML = `
          <svg class="store-btn-svg" viewBox="0 0 24 24">
            <path d="M3 5.25L13.5 15.75L3 26.25V5.25M15 14.25L19.5 12C20.25 11.5 20.25 10.5 19.5 10L16.5 8.5L13.5 15.75L15 14.25M3 26.25L13.5 15.75L16.5 21.75L19.5 20.25C20.25 19.75 20.25 18.75 19.5 18.25L15 15.75L3 26.25Z" fill="currentColor"/>
          </svg>
          <div class="store-btn-text">
            <span class="store-btn-subtitle">Android</span>
            <span class="store-btn-title">Coming soon</span>
          </div>
        `;
        modalDownloads.appendChild(playBtn);
      }

      // Nút App Store
      if (app.appStoreUrl && app.appStoreUrl !== '#') {
        hasStoreLink = true;
        const appBtn = document.createElement('a');
        appBtn.href = app.appStoreUrl;
        appBtn.target = '_blank';
        appBtn.className = 'store-btn';
        appBtn.innerHTML = `
          <svg class="store-btn-svg" viewBox="0 0 24 24">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.48C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.85 1.04 14.51 1.73 13.73 2.64C13.07 3.41 12.49 4.52 12.64 5.78C13.87 5.87 15.12 5.17 15.97 4.17Z" fill="currentColor"/>
          </svg>
          <div class="store-btn-text">
            <span class="store-btn-subtitle">Tải từ</span>
            <span class="store-btn-title">App Store</span>
          </div>
        `;
        modalDownloads.appendChild(appBtn);
      } else {
        // Render nút disable báo sắp ra mắt
        const appBtn = document.createElement('div');
        appBtn.className = 'store-btn';
        appBtn.style.opacity = '0.4';
        appBtn.style.cursor = 'not-allowed';
        appBtn.innerHTML = `
          <svg class="store-btn-svg" viewBox="0 0 24 24">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.48C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.85 1.04 14.51 1.73 13.73 2.64C13.07 3.41 12.49 4.52 12.64 5.78C13.87 5.87 15.12 5.17 15.97 4.17Z" fill="currentColor"/>
          </svg>
          <div class="store-btn-text">
            <span class="store-btn-subtitle">iOS</span>
            <span class="store-btn-title">Coming soon</span>
          </div>
        `;
        modalDownloads.appendChild(appBtn);
      }
    }

    // Các đường dẫn xem chính sách pháp lý
    if (modalPolicyLinks) {
      modalPolicyLinks.innerHTML = `
        <a href="#privacy/${app.id}" id="modal-privacy-link">Privacy Policy</a>
        <a href="#terms/${app.id}" id="modal-terms-link">Terms of Service</a>
      `;

      // Khi click vào các link này trong modal, hãy ẩn modal đi trước để hiển thị trang chính sách
      const links = modalPolicyLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => closeModal());
      });
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang chính khi đang mở modal
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Click ra ngoài modal để đóng
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Phím ESC để đóng modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 5. ĐIỀU HƯỚNG DÀNH RIÊNG CHO CHÍNH SÁCH BẢO MẬT ĐỘNG (HASH ROUTER SYSTEM)
  const handleRouting = () => {
    const hash = window.location.hash;

    if (hash.startsWith('#privacy/') || hash.startsWith('#terms/')) {
      const isPrivacy = hash.startsWith('#privacy/');
      const appId = hash.split('/')[1];

      // Tìm ứng dụng trong mảng cấu hình
      const app = config.apps.find(a => a.id === appId);

      if (app) {
        // Ẩn nội dung trang chính, hiển thị trang pháp lý
        if (mainContent) mainContent.style.display = 'none';
        if (policyPage) policyPage.classList.add('active');

        let contentHtml = '';
        if (isPrivacy) {
          contentHtml = app.privacyPolicy || `<h3>Privacy Policy for ${app.name}</h3><p>Nội dung đang được cập nhật...</p>`;
        } else {
          contentHtml = app.termsOfService || `<h3>Terms of Service for ${app.name}</h3><p>Nội dung đang được cập nhật...</p>`;
        }

        // Thêm nút quay lại
        if (policyContent) {
          policyContent.innerHTML = `
            <a href="#" class="policy-back-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to home page
            </a>
            <div class="policy-html-content">
              ${contentHtml}
            </div>
          `;

          // Thêm sự kiện quay lại bằng nút hoặc hash
          const backBtn = policyContent.querySelector('.policy-back-btn');
          if (backBtn) {
            backBtn.addEventListener('click', (e) => {
              e.preventDefault();
              window.location.hash = '';
            });
          }
        }

        // Cuộn lên đầu trang
        window.scrollTo(0, 0);
      } else {
        // Không tìm thấy app, quay về trang chủ
        window.location.hash = '';
      }
    } else {
      // Hiển thị lại trang chủ chính
      if (policyPage) policyPage.classList.remove('active');
      if (mainContent) mainContent.style.display = 'block';

      // Cuộn đến phần nếu hash là ID định vị (ví dụ #apps)
      if (hash && hash.length > 1) {
        try {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (e) {
          console.warn('Invalid query selector for hash:', hash, e);
        }
      }
    }
  };

  window.addEventListener('hashchange', handleRouting);

  // 6. XỬ LÝ GỬI FORM LIÊN HỆ (CONTACT FORM HANDLING)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('form-name');
      const emailEl = document.getElementById('form-email');
      const subjectEl = document.getElementById('form-subject');
      const messageEl = document.getElementById('form-message');

      const name = nameEl ? nameEl.value : '';
      const email = emailEl ? emailEl.value : '';
      const subject = subjectEl ? subjectEl.value : '';
      const message = messageEl ? messageEl.value : '';

      // Tạo hiệu ứng gửi
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" style="animation: spin 1s linear infinite; width:1.2rem; height:1.2rem; margin-right:5px; display:inline-block;" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity:0.25;"></circle>
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Đang gửi...
      `;

      // Giả lập gửi lên máy chủ trong 1.5 giây
      setTimeout(() => {
        // Hiển thị thông báo thành công đẹp mắt
        alert(`Cảm ơn ${name}! Ý kiến phản hồi của bạn đã được ghi nhận. Hệ thống sẽ tự động mở ứng dụng gửi thư để bạn gửi trực tiếp tới ${config.developer.email}.`);

        // Mở mailto client
        const mailtoUrl = `mailto:${config.developer.email}?subject=${encodeURIComponent(subject || 'Liên hệ từ Portfolio')}&body=${encodeURIComponent(`Hello ${config.developer.name},\n\nI am ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;

        // Reset form
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }, 1200);
    });
  }

  // Thêm keyframes spin cho spinner trong CSS thủ công thông qua JS để đảm bảo chạy được
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);

  // 7. KHỞI CHẠY LẦN ĐẦU (INITIAL RUN)
  loadDeveloperInfo();
  renderApps('all');
  handleRouting(); // Kiểm tra xem nếu người dùng load trang bằng direct hash link
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}