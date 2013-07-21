Debug Instructions
==================

This how to describes how to debug an application on different devices in a Cordova environment.

iOS
---

Basically debugging a web application wrapped by phonegap doesn't differ to debugging a normal web application running in Safari mobile.

First of all you have to prepare your phone to provide the information needed by the safarie debugging tools.

- Go to the settings panel and choose safari.
![Safari settings](/howto/debuggingios/developersettings_2x.png "Safari Settings")

- Go to Advanced and make sure "Web Inspector" is activated.
![Webinspector](/howto/debuggingios/developersettings_2x.png "Web Inspector")

-Now open safari on your mac and connect your Iphone to your mac.

- Under the menu "Develop" you should see your Iphone now:
![Develop menu](/howto/debuggingios/developmenufromwebview_2x.png "Developer menu")

- As soon you started your web app or you cordova app it will appear in the submenu.
- After you selected your app you can use the safari developer tools as you used to do
- you can for instance evaluate javascript on the device:

![Evaluate Javascript](/howto/debuggingios/evaluateJavascript.png "Evaluate Javascript")
![Evaluated Javascript](/howto/debuggingios/evaluationResult.png "Evaluated result on the device")

- you can also set breakpoints in the code running on the device
![Breakpoints](/howto/debuggingios/breakpoints.png "Breakpoints")

Android
-------

Windows
-------

