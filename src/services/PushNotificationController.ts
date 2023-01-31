import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    notification.foreground = false;
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: false,
    sound: false,
  },

  popInitialNotification: true,

  requestPermissions: true,
});

PushNotification.createChannel({
  channelId: "cdbicXk5SbasaqarK_vsU0:APA91bGjJuivsJLBagRKiNZOrNdsZjupNjbcIPqGuCruqpAgiBLDjLyUZ7G9oZEVbEIcQg4eJVyj8SK0BXTBmwHywq1cJ6ow9AkHq-yvKpxboLTV2wzvSc-Hs8tY37vVyk5Ls6uuZrR_",
  channelName: "NotificationChannel",
  playSound:false,
},
(created)=>{console.log("CreateChannel returned: ",created)

})