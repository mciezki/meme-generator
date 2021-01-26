importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyA5kSJGlUmKC9PftAV8LyHcpdjoaOwKbJ8",
    authDomain: "meme-generator-fe1c4.firebaseapp.com",
    databaseURL: "https://meme-generator-fe1c4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meme-generator-fe1c4",
    storageBucket: "meme-generator-fe1c4.appspot.com",
    messagingSenderId: "888796383810",
    appId: "1:888796383810:web:657b8ecffc3740a026fbdb",
    measurementId: "G-8007NWQCGB"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});