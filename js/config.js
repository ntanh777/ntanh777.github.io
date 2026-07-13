/**
 * CẤU HÌNH TẬP TRUNG CHO WEBSITE PORTFOLIO & KIỂM DUYỆT ADMOB
 * 
 * Người dùng chỉ cần chỉnh sửa nội dung trong file này.
 * Trang web sẽ tự động cập nhật toàn bộ giao diện và chức năng tương ứng.
 * 
 * =========================================================================
 * GHI CHÚ KÍCH THƯỚC HÌNH ẢNH KHUYÊN DÙNG (RECOMMENDED IMAGE SIZES):
 * =========================================================================
 * 1. LOGO CÁ NHÂN / AVATAR (developer.logoUrl):
 *    - Định dạng: PNG, JPG, hoặc WEBP (Nền trong suốt hoặc có màu).
 *    - Tỉ lệ: Hình vuông 1:1.
 *    - Kích thước khuyên dùng: 512 x 512 px hoặc 1024 x 1024 px.
 * 
 * 2. ICON ỨNG DỤNG / GAME (apps[].logoUrl):
 *    - Định dạng: PNG (Nên dùng nền trong suốt).
 *    - Tỉ lệ: Hình vuông 1:1.
 *    - Kích thước khuyên dùng: 512 x 512 px (chuẩn Google Play) hoặc 1024 x 1024 px (chuẩn App Store).
 * 
 * 3. ẢNH CHỤP MÀN HÌNH / SCREENSHOTS (apps[].screenshots):
 *    - Định dạng: PNG hoặc JPG.
 *    - Tỉ lệ màn hình đứng (Portrait): 9:16 (ví dụ: 1080 x 1920 px hoặc 1242 x 2688 px).
 *    - Tỉ lệ màn hình ngang (Landscape): 16:9 (ví dụ: 1920 x 1080 px).
 * 
 * 4. ẢNH ĐẠI DIỆN CHIA SẺ LIÊN KẾT / SEO (og:image):
 *    - Lưu tại: assets/og-image.png (Được khai báo trong index.html)
 *    - Tỉ lệ khuyên dùng: 1.91:1.
 *    - Kích thước khuyên dùng: 1200 x 630 px.
 * =========================================================================
 */

const APP_CONFIG = {
  // 1. THÔNG TIN CÁ NHÂN / NHÀ PHÁT TRIỂN
  developer: {
    name: "Nguyễn Tuấn Anh",
    title: "Mobile App & Game Developer",
    email: "ntanh777@gmail.com", // Email dùng cho hỗ trợ và AdMob
    address: "Ho Chi Minh City, Vietnam",

    // Logo cá nhân: Ưu tiên dùng ảnh (Khuyên dùng hình vuông tỉ lệ 1:1, kích thước 512x512 px hoặc 1024x1024 px). Nếu chưa có ảnh, hệ thống sẽ dùng SVG mặc định bên dưới.
    // Để dùng ảnh của bạn: Hãy lưu ảnh logo vào thư mục dự án và thay đổi đường dẫn ở đây (ví dụ: "logo.png" hoặc "assets/dev-logo.png")
    logoUrl: "assets/logo 1024.png",

    // SVG Logo mặc định (Sử dụng nếu logoUrl trống - Thiết kế chữ TA cách điệu tinh tế)
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d9488" />
          <stop offset="100%" stop-color="#0f766e" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="none" stroke="url(#logoGrad)" stroke-width="4"/>
      <path d="M25 35 H75 M50 35 V75" stroke="url(#logoGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60 75 L70 50 L80 75 M65 65 H75" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    aboutHtml: `
      <p class="mb-4">I am an independent developer specializing in building mobile applications and games for both Android and iOS platforms. With a focus on performance optimization and streamlined UI/UX design, I aim to create products that deliver real value and the best possible entertainment experience for users.</p>
      <p>My products always comply strictly with the policies of Google Play, App Store and Google AdMob advertising partners, ensuring a safe environment and absolute data security for users.</p>
    `,

    socialLinks: {
      github: "https://ntanh777.github.io",
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },

  // 2. DANH SÁCH 7 ỨNG DỤNG & TRÒ CHƠI
  // Để thêm ứng dụng mới, chỉ cần sao chép một đối tượng ứng dụng bên dưới và dán vào cuối danh sách.
  // 
  // * Yêu cầu kích thước hình ảnh cho từng ứng dụng:
  //   - logoUrl: Ảnh icon hình vuông tỉ lệ 1:1 (khuyên dùng kích thước 512x512 px hoặc 1024x1024 px).
  //   - screenshots: Danh sách ảnh chụp màn hình tỉ lệ đứng 9:16 (ví dụ: 1080x1920 px) hoặc tỉ lệ ngang 16:9 (ví dụ: 1920x1080 px).
  apps: [
    {
      id: "voto",
      name: "iVoto - Ask the world, get the truth",
      type: "app", // 'app' hoặc 'game'

      // Icon ứng dụng: Ưu tiên dùng ảnh logo (Khuyên dùng hình vuông tỉ lệ 1:1, kích thước 512x512 px hoặc 1024x1024 px). Nếu chưa có ảnh, dùng SVG mặc định bên dưới.
      logoUrl: "assets/icon 1024 - voto.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#votoGrad)"/>
        <defs>
          <linearGradient id="votoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng tích dấu và hộp biểu quyết -->
        <path d="M30 50 L45 65 L75 35" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,

      shortDescription: "An application for real-time online surveys, voting, and polling.",
      description: "iVoto is an intuitive solution that helps groups, classes, businesses, friends, or communities easily create surveys, collect votes quickly and transparently. The app supports real-time update of voting results with clear and vivid charts.",

      features: [
        "Create a poll in just 30 seconds.",
        "Real-time results updated in clear and vivid charts.",
        "Supports anonymous voting to protect personal opinions.",
        "Easily share polls via QR code or link.",
        "Minimalist interface, intuitive and easy to use for all ages."
      ],

      playStoreUrl: "https://play.google.com/store/apps/details?id=com.atbtech.voto&pcampaignid=web_share", 
      appStoreUrl: "https://apps.apple.com/vn/app/ivoto/id6784168135?l=vi", // Để '#' nếu chưa lên App Store

      // Ảnh chụp màn hình (nếu chưa có ảnh thật, hệ thống sẽ tự sinh các khung placeholder đẹp mắt).
      // Khuyên dùng tỉ lệ màn hình đứng 9:16 (ví dụ: 1080x1920 px hoặc 1242x2688 px) để hiển thị tốt nhất trên thiết bị di động.
      screenshots: ["assets/voto/voto1.png", "assets/voto/voto2.png", "assets/voto/voto3.png"],

      // Chính sách bảo mật chi tiết cho App này (Dành cho AdMob & Google Play kiểm duyệt)
      privacyPolicy: `
        <h3>Privacy Policy for Voto</h3>
        <p>Effective Date: 09/06/2026</p>
        <p>The iVoto application is built by Nguyen Tuan Anh as a free application (or contains advertisements). This service is provided by Nguyen Tuan Anh and is designed for native use.</p>
        
        <h4>1. Collection and Use of Information</h4>
        <p>To provide a better experience when using our Service, I may ask you to provide us with certain personally identifiable information.</p>
        <p>The app uses third-party services that may collect information used to identify you. Third-party services include:</p>
        <ul>
          <li>Google Play Services</li>
          <li>Google Ads</li>
          <li>Firebase Analytics</li>
        </ul>

        <h4>2. Log Data</h4>
        <p>I want to inform you that whenever you use my Service, in the event of an app error, I will collect data and information (through third-party products) on your phone called Log Data. This log data may include information such as your device's Internet Protocol ("IP") address, device name, operating system version, application configuration when using My Services, the time and date you used the Services, and other statistics.</p>

        <h4>3. AdMob Ads</h4>
        <p>We may display ads from Google's AdMob ad network. AdMob uses anonymous identifiers on your device to display personalized ads based on your interests and behavior. You can customize or disable this in your mobile device's Ads Settings.</p>

        <h4>4. Privacy</h4>
        <p>I value your trust in providing us with your Personal Information, so we are striving to use commercially acceptable means to protect that information. But remember that no method of transmission over the internet, or any method of electronic storage, is 100% secure and reliable, and I cannot guarantee its absolute security.</p>

        <h4>5. Contact Me</h4>
        <p>If you have any questions or suggestions about my Privacy Policy, please feel free to contact me at: <strong>ntanh777@gmail.com</strong></p>
      `,

      termsOfService: `
        <h3>Terms of Service for Voto</h3>
        <p>By downloading or using the application, these terms will automatically apply to you - so you should ensure that you have read them carefully before using the application.</p>
        <p>You are not permitted to copy or modify the application, any part of the application, or our trademarks in any way. You are not permitted to attempt to extract the source code of the application, and you should not attempt to translate the application into other languages ​​or create derivative versions.</p>
        <p>Nguyen Tuan Anh is committed to ensuring that the application is as useful and effective as possible. For that reason, we reserve the right to make changes to the app or charge for app services at any time and for any reason.</p>
      `
    },
    {
      id: "slido",
      name: "Slido - Slide to fit, play to chill",
      type: "game", // 'app' hoặc 'game'
      logoUrl: "assets/icon 1024 - slido.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#zenGrad)"/>
        <defs>
          <linearGradient id="zenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng chiếc ví hoặc đồng tiền vàng -->
        <circle cx="50" cy="50" r="24" fill="none" stroke="#ffffff" stroke-width="8"/>
        <path d="M50 38 V62 M42 46 H58 M44 54 H56" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      </svg>`,
      shortDescription: "Slido - Slide blocks, fill horizontal rows, and chill in this endless puzzle !",
      description: "Welcome to **Slido - Slide to fit, play to chill**! Enter a vibrant world of sliding block puzzles, designed to sharpen your mind while helping you unwind and escape daily stress. With no timers and no pressure, you can play at your own comfortable pace. **Slido** delivers a pure, satisfying puzzle experience that is hard to put down. Can you keep the grid clean and achieve the ultimate high score? Download now and test your sliding skills!",
      features: [
        "Addictive Sliding Gameplay: Easy to learn, satisfying to execute, and challenging to master. Enjoy rich cascade combinations and massive combo scores.",
        "Two Challenging Game Modes: 9x18 Grid Mode (Easy) - 9x12 Grid Mode (Hard)",
        "Powerful Game Boosters (Power-ups): Clear Largest - Split to Ones",
        "Global Leaderboards: Sign in quickly via Google, Apple ID, or as an anonymous guest to lock in your high score and climb the ranks in our worldwide Top 1000 board.",
        "Offline-First Smart Sync: Play anywhere, even without internet access (e.g., in subways or remote areas). Your high score is cached locally and safely synced to Firestore once you get back online."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: ["assets/slido/slido1.png", "assets/slido/slido2.png", "assets/slido/slido3.png"],
      privacyPolicy: `
        <h3>Privacy Policy for Slido</h3>
        <p>Effective Date: 13/06/2026</p>
        <h4>1. Overview</h4>
        <p>Slido is operated by Slido Team. This Privacy Policy explains what data we collect, how we use it, and your choices.</p>
        <h4>2. Data We Collect</h4>
        <p>Account and identity data: email, display name, username, country, and sign-in provider account info (Google/Apple/Email).</p>
        <p>Gameplay data: score, rank, progression, and activity events.</p>
        <p>Device and diagnostics data: crash logs, performance metrics, device metadata, and app usage events.</p>
        <p>Ad-related data: ad interactions, basic device signals, and consent status provided by ad services.</p>
        <p>Optional profile data: profile image and account preferences.</p>
        <h4>3. How We Use Data</h4>
        <p>Provide login, profile, leaderboard, and core gameplay features.</p>
        <p>Sync game progress and secure score processing.</p>
        <p>Prevent abuse, cheating, fraud, and service disruption.</p>
        <p>Improve game quality, balance, and user experience.</p>
        <p>Deliver ads and measure ad performance.</p>
        <p>Meet legal and policy requirements.</p>
        <h4>4. Services and Processors</h4>
        <p>We may use trusted providers including Firebase (Authentication, Firestore, Cloud Functions, Crashlytics, Analytics, Storage) and Google Mobile Ads to operate and improve the game.</p>
        <h4>5. Legal Basis and Consent</h4>
        <p>Where required by law, we request consent for personalized ads and related processing (UMP/GDPR). You can decline consent where supported by your region and platform settings.</p>
        <h4>6. Data Sharing</h4>
        <p>We do not sell your personal data. We may share limited data with service providers strictly to run the game, secure the platform, and comply with legal obligations.</p>
        <h4>7. Data Retention</h4>
        <p>We keep data only as long as needed for account operation, security, analytics, and legal obligations. Data that is no longer necessary is deleted or anonymized when possible.</p>
        <h4>8. Security</h4>
        <p>We apply reasonable technical and organizational safeguards. No internet service can be guaranteed 100% secure, but we continuously improve security controls.</p>
        <h4>9. Your Rights</h4>
        <p>Depending on your region, you may have rights to access, correct, delete, or restrict your data. </br>- You can request account deletion from inside the app Settings. </br>- You may contact us at ntanh777@gmail.com for privacy requests.</p>
        <h4>10. Children's Privacy</h4>
        <p>The game is not intended for children under the minimum age required by local law for independent consent.</p>
        <h4>11. Changes to This Policy</h4>
        <p>We may update this policy from time to time. Material changes will be reflected by updating the effective date and in-app notice when required.</p>
      `,
      termsOfService: `
        <h3>Terms of Service for Slido</h3>
        <p>Effective Date: 13/06/2026</p>
        <h4>1. Acceptance of Terms</h4>
        <p>By creating an account, signing in, or using Slido, you agree to these Terms of Service.</p>
        <h4>2. Eligibility and Account</h4>
        <p>- You are responsible for account credentials and account activity.</p>
        <p>- You agree to provide accurate account information.</p>
        <p>- You must not create accounts for abuse, automation, or fraud.</p>
        <p>- You have the right to request deletion of your account at any time via the in-app profile settings. Re-authentication is required to verify identity before deletion.</p>
        <h4>3. Fair Play and Conduct</h4>
        <p>You agree not to: Cheat, exploit bugs, reverse engineer, or manipulate score systems.</br> Use bots, scripts, or unauthorized tools.</br> Harass, impersonate, or abuse other users.</br> Attempt unauthorized access to game systems or data.</p>
        <h4>4. Gameplay, Rankings, and Rewards</h4>
        <p>Rankings and scores may be reviewed for integrity and anti-cheat checks.</br> Invalid or suspicious records may be removed or adjusted.</br> Reward features and events may change, pause, or end at any time.</p>
        <h4>5. Ads and Monetization</h4>
        <p>The game may display ads, including rewarded formats. Ad availability and reward outcomes are not guaranteed and can depend on network, region, and provider status (Google AdMob).</p>
        <h4>6. Intellectual Property</h4>
        <p>All game assets, content, design, and trademarks are owned by Slido Team or licensed to Slido Team. You may not copy, distribute, or commercialize them without permission.</p>
        <h4>7. Service Availability</h4>
        <p>We aim for stable service but do not guarantee uninterrupted operation. Maintenance, outages, or third-party failures may occur.</p>
        <h4>8. Limitation of Liability</h4>
        <p>To the maximum extent permitted by law, Slido Team is not liable for indirect, incidental, or consequential losses from use of the game.</p>
        <h4>9. Governing Law</h4>
        <p>These terms are governed by applicable laws of the jurisdictions where the game is distributed and operated.</p>
      `
    },
    {
      id: "cooko",
      name: "iCooko - Simply cook, simply iCooko",
      type: "app",
      logoUrl: "assets/icon 1024 - cooko.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#ninjaGrad)"/>
        <defs>
          <linearGradient id="ninjaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1f2937" />
            <stop offset="100%" stop-color="#111827" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng phi tiêu Shuriken màu đỏ rực -->
        <path d="M50 15 L56 44 L85 50 L56 56 L50 85 L44 56 L15 50 L44 44 Z" fill="#ef4444"/>
        <circle cx="50" cy="50" r="8" fill="#111827"/>
      </svg>`,
      shortDescription: "Cooking is easy with Cooko! Discover and share recipes and tutorial videos anytime.",
      description: "iCooko - Simply cook, simply iCooko. Do you love cooking but are always racking your brains trying to decide what to cook? Do you want to share your unique cooking secrets with friends and the community? Let Cooko accompany you on your culinary journey!",
      features: [
        "Diverse and Secure Login System: Supports quick account registration and authentication via Email/Personal Password, Google Sign-In or Apple Sign-In (on iOS) ensuring maximum convenience and security.",
        "Sharing Detailed Recipes: The new recipe creation interface allows for detailed configuration: dish name, description, category (Breakfast, Lunch, Dinner, Dessert, Snack, Drink, Vegetarian, Vegan, Seafood, Meat), difficulty level (Easy, Medium, Hard), preparation/cooking time, serving size, ingredient list, and steps.",
        "Advanced Filtering & Sorting: Explore the culinary world through smart filters by food category, difficulty level, and sort by popularity (Most Popular), newest (Most Recent), or highest rating (Highest Rated).",
        "Professional Profile Management: Each user has a unique profile displaying their name, profile picture, bio, list of self-posted recipes (My Recipes), and interaction metrics (Followers, Following, Recipes Count).",
        "Smart Sync: The application only downloads and synchronizes new or changed recipe data from the cloud system to the device, minimizing bandwidth usage and increasing application launch speed.",
        "Privacy & Community Safety: Supports reporting inappropriate, spam, plagiarized, or harmful content. Permanent account deletion and data security features strictly comply with Apple App Store and Google Play Store regulations."
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.atbtech.slido&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/vn/app/slido/id6785599716?l=vi",
      screenshots: ["assets/cooko/cooko1.png", "assets/cooko/cooko2.png", "assets/cooko/cooko3.png"],
      privacyPolicy: `
        <h3>Privacy Policy for iCooko</h3>
        <p>Effective Date: 13/06/2026</p>
        <p>Welcome to iCooko ("we", "our app"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the iCooko app.</p>
        <h4>Information We Collect</h4>
        <p>When you use iCooko, we may collect the following information:</p>
        <p>- Account information: Display name, email address, and profile picture when you register via Email, Google, or Apple.</p>
        <p>- User-generated content: Recipes, images, cooking tutorial videos, comments, likes, saves, and reviews that you publicly post to the app.</p>
        <p>- Device and usage information: IP address, device type, operating system, app performance metrics (crash errors via Firebase Crashlytics), and usage behavior (via Firebase Analytics).</p>
        <p>- Advertising Data: Mobile device advertising ID for delivering and measuring ads through the Google AdMob service.</p>
        <h4>How We Use Your Information</h4>
        <p>We use your information for the following purposes:</p>
        <p>- Providing, operating, and maintaining the services and features of the iCooko app.</p>
        <p>- Managing your personal account, verifying access, and personalizing your cooking experience.</p>
        <p>- Temporarily storing images and videos to optimize offline viewing experience and save you data.</p>
        <p>- Displaying non-personalized or personalized ads (compliance with GDPR Consent via UMP SDK for users in the European Economic Area - EEA).</p>
        <p>- Processing and verifying Premium package purchases (In-App Purchases) through the Google Play Store and Apple App Store.</p>
        <p>- Detecting, preventing, and addressing fraud, terms violations, or technical errors.</p>
        <h4>Data Storage and Security</h4>
        <p>- Your data is securely stored on Google Firebase's cloud servers.</p>
        <p>- We employ industry-standard technical security measures (such as SSL/HTTPS data transmission encryption and strict Firebase Security Rules) to prevent unauthorized access, modification, or disclosure of information.</p>
        <p>- However, no method of internet transmission or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
        <h4>Your Rights Regarding Personal Data</h4>
        <p>- You have the right to view and edit your profile information (Display Name, Profile Picture, Bio) at any time through the personal settings page in the application.</p>
        <p>- Right to delete account: You have the right to permanently delete your account and all related personal data at any time using the "Delete Account" feature in the application's Settings. To ensure security, the system requires you to enter a confirmation password before proceeding with the deletion. After confirmation, all your account information and recipes in the database will be completely deleted and cannot be recovered.</p>
        <h4>Children's Privacy</h4>
        <p>The application does not actively collect personal information from children under 13 years old. If you are a parent or guardian and discover that your child has provided personal information to us, please contact us so we can delete that information from the system.</p>
        <h4>Changes to the Privacy Policy</h4>
        <p>We may update this Privacy Policy from time to time. Any changes will take effect immediately upon being posted in the application. Continuing to use the application after changes means you accept the new Privacy Policy.</p>
        <h4>Contact Support</h4>
        <p>If you have any questions about this Privacy Policy, please contact us via email: ntanh777@gmail.com.</p>
      `,
      termsOfService: `
        <h3>Terms of Service for iCooko</h3>
        <p>Effective Date: 13/06/2026</p>
        <p>Please read these Terms of Service ("Terms") carefully before using the iCooko mobile application operated by the iCooko Team ("we"). Accessing and using the application signifies your agreement to abide by these Terms.</p>
        <h4>Acceptance of Terms</h4>
        <p>By downloading, installing, or using the iCooko application, you agree to be bound by these Terms. If you do not agree with any part of the Terms, you are not permitted to use the application.</p>
        <h4>User Account</h4>
        <p>- To use certain features of the app (such as creating recipes, writing reviews, following other users), you must create an account through supported authentication methods.</p>
        <p>- You are responsible for maintaining the security of your account information and password. You are solely responsible for all activities that occur under your account.</p>
        <p>- You must provide accurate information and update it when changes occur.</p>
        <h4>Ownership and Responsibility for Content</h4>
        <p>+ Your Content: You retain full ownership of the recipes, images, and videos you upload to iCooko. However, by uploading such content, you grant iCooko a non-exclusive, royalty-free, globally valid license to display, store, distribute, and promote that content on the iCooko platform.</p>
        <p>+ Content Responsibility: You agree that the content you post does not infringe on the copyright, trademark, or any third-party intellectual property rights. You are fully legally responsible for the content you share.</p>
        <p>+ Prohibited Content: You are not allowed to post the following content:</p>
        <p>  - Content that is offensive, defamatory, incites violence, is offensive, or obscene.</p>
        <p>  - Content that is misleading, fraudulent, or contains malicious code.</p>
        <p>  - Spam or impersonation of others.</p>
        <p>  - Recipes containing dangerous ingredients or processes that could directly harm the health of others.</p>
        <h4>Premium Subscription Packages & Payment</h4>
        <p>- iCooko offers Premium subscription packages (Monthly, Annually) or a Lifetime purchase to experience ad-free service and unlock advanced features.</p>
        <p>- Payment transactions are processed directly through the In-App Purchase mechanism of the Google Play Store (Android) or Apple App Store (iOS). Any refund requests or payment disputes will be governed by the policies of these app stores.</p>
        <p>- Monthly or annual Premium subscriptions will automatically renew unless you cancel your subscription at least 24 hours before the end of the current billing cycle. You can manage and cancel renewals in the Google Play or Apple Store app account settings.</p>
        <h4>Watch Ads to Get Free Premium</h4>
        <p>- iCooko offers a mechanism that allows users to watch 10 video ads to redeem for 1 day of free Premium access.</p>
        <p>- This feature depends on the availability of video ads from our Google AdMob partner. We do not guarantee that ads will always be available at all times or locations.</p>
        <p>- Any fraudulent activity or use of automated tools (Auto-clicker/Bot) to bypass ad viewing will result in immediate account suspension without prior notice.</p>
        <h4>Termination of Service</h4>
        <p>We reserve the right to terminate or suspend your access to the application immediately, without prior notice or legal liability, if you violate any of the terms in this document. Upon termination, your access to the application will be revoked immediately.</p>
        <h4>Limitation of Liability</h4>
        <p>- iCooko is a platform for sharing and referencing recipes. We are not responsible for your cooking results, food allergies, injuries, or equipment damage that occur while you follow the recipes on the application.</p>
        <p>- The application is provided on an "as is" and "as available" basis. We do not guarantee that the application will operate without interruption, without errors, or be completely free from viruses.</p>
        <h4>Applicable Law</h4>
        <p>These Terms are governed by and interpreted in accordance with the laws of the Socialist Republic of Vietnam, without regard to conflict of laws principles.</p>
        <h4>Contact</h4>
        <p>For any questions or feedback regarding these Terms of Service, please send an email to: ntanh777@gmail.com</p>
      `
    },
    {
      id: "rebox",
      name: "Rebox - Give old a new life",
      type: "app",
      logoUrl: "assets/icon 1024 - rebox.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#fitGrad)"/>
        <defs>
          <linearGradient id="fitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e" />
            <stop offset="100%" stop-color="#be123c" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng quả tạ tay sấm sét -->
        <path d="M25 50 H75" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
        <rect x="20" y="30" width="10" height="40" rx="3" fill="#ffffff"/>
        <rect x="70" y="30" width="10" height="40" rx="3" fill="#ffffff"/>
      </svg>`,
      shortDescription: "Rebox - A smart and environmentally friendly app for buying and selling used items near you.",
      description: "Do you have items you no longer use but are still in good condition and valuable? Are you looking to declutter your home and optimize your living space but don't know how to dispose of old items to avoid waste? Or are you searching for quality items at affordable prices to save money?.</br>Welcome to **ReBox** – the leading mobile app connecting communities for buying, selling, exchanging, and reusing used goods. With the slogan 'Give old a new life', ReBox offers a green, smart, and environmentally friendly consumption solution. We not only help you turn old items into cash or exchange them for other useful items, but also work with you to reduce plastic waste, electronic waste, and move towards a sustainable lifestyle.",
      features: [
        "Check it out on the App/Game",
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: ["assets/rebox/rebox1.png", "assets/rebox/rebox2.png", "assets/rebox/rebox3.png"],
      privacyPolicy: `
        <p>Check it out on the App/Game</p>
      `,
      termsOfService: `
        <p>Check it out on the App/Game</p>
      `
    },
    {
      id: "petto",
      name: "Petto - Care with love, share with joy",
      type: "app",
      logoUrl: "assets/icon 1024 - petto.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#wordGrad)"/>
        <defs>
          <linearGradient id="wordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#eab308" />
            <stop offset="100%" stop-color="#ca8a04" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng ô chữ ký tự W -->
        <rect x="25" y="25" width="50" height="50" rx="10" fill="#ffffff"/>
        <text x="50" y="62" font-family="system-ui, sans-serif" font-weight="900" font-size="42" fill="#ca8a04" text-anchor="middle">W</text>
      </svg>`,
      shortDescription: "Petto: Comprehensive pet health management, vaccinations, and community connection for pet lovers.",
      description: "Petto is an all-in-one app that helps you comprehensively manage your pet's health information, while also connecting you with a community of animal lovers. Whether you own a dog, cat, bird, fish, hamster, or rabbit, Petto provides smart tools to care for your pets in the most scientific and easy way.",
      features: [
        "Check it out on the App/Game",
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: ["assets/petto/petto1.png", "assets/petto/petto2.png", "assets/petto/petto3.png"],
      privacyPolicy: `
        <p>Check it out on the App/Game</p>
      `,
      termsOfService: `
        <p>Check it out on the App/Game</p>
      `
    },
    {
      id: "droppo",
      name: "Droppo - Drop the win, connect the fun",
      type: "game",
      logoUrl: "assets/icon 1024 - droppo.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#photoGrad)"/>
        <defs>
          <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng ống kính máy ảnh nghệ thuật -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" stroke-width="7"/>
        <circle cx="50" cy="50" r="12" fill="#ffffff"/>
        <circle cx="70" cy="30" r="4" fill="#ffffff"/>
      </svg>`,
      shortDescription: "Dropo - A thrilling and high-level online PvP board game from Connect 4 !",
      description: "Welcome to Dropo, the modern and dramatic upgraded version of the legendary Connect 4 (Four Glasses Chess) game! With its impressive Cyberpunk/Neon design style, combining elegant Cobalt blue and vibrant Neon red, Dropo offers you a top-notch, smooth, and challenging online intellectual battleground.",
      features: [
        "Check it out on the App/Game",
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: ["assets/droppo/droppo1.png", "assets/droppo/droppo2.png", "assets/droppo/droppo3.png"],
      privacyPolicy: `
        <p>Check it out on the App/Game</p>
      `,
      termsOfService: `
        <p>Check it out on the App/Game</p>
      `
    },
    {
      id: "ticko",
      name: "Ticko - Make every second count",
      type: "app",
      logoUrl: "assets/icon 1024 - ticko.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#galaxyGrad)"/>
        <defs>
          <linearGradient id="galaxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0891b2" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng phi thuyền không gian đang bay vút lên -->
        <path d="M50 20 L65 55 L55 50 L50 75 L45 50 L35 55 Z" fill="#ffffff"/>
        <circle cx="50" cy="78" r="4" fill="#ef4444"/>
      </svg>`,
      shortDescription: "Tikco - Transform important events into dynamic countdown progress bars.",
      description: "Tikco is more than just a regular countdown app; it's a tool that visualizes your life's progress. Every important event, from birthdays and anniversaries to work deadlines, travel plans, and health goals, is vividly displayed through stunning gradient progress bars that move smoothly right on your device screen.",
      features: [
        "Check it out on the App/Game",
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: ["assets/ticko/ticko1.png", "assets/ticko/ticko2.png", "assets/ticko/ticko3.png"],
      privacyPolicy: `
        <p>Check it out on the App/Game</p>
      `,
      termsOfService: `
        <p>Check it out on the App/Game</p>
      `
    }
  ]
};

// Xuất cấu hình ra môi trường toàn cục để file main.js sử dụng trực tiếp
if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
}
