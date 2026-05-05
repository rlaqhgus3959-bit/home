// 1. 파이어베이스 백그라운드용 라이브러리 불러오기
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// 2. 파이어베이스 설정 (기존 키값 그대로)
firebase.initializeApp({
    apiKey: "AIzaSyC4pyfcbxQu7ggpju9pAn-bJiRMDVKsRrc",
    authDomain: "ansim-doghaeng.firebaseapp.com",
    projectId: "ansim-doghaeng",
    storageBucket: "ansim-doghaeng.firebasestorage.app",
    messagingSenderId: "969921301114",
    appId: "1:969921301114:web:210c4a8978a3b2204f89c3"
});

const messaging = firebase.messaging();

// 3. 화면이 꺼져있거나 백그라운드일 때 알림을 띄우는 로직
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신: ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png' // 경찰 아이콘
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
