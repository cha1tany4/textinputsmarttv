# 2-Row Predictive keyboard and Quad-Directional keyboard: an investigation into two novel text input methods for smart TVs

For using the prototypes on Amazon Fire TV devices,

1. Install the Web App Tester from the Amazon Appstore.
2. Enable Debugging on Amazon Fire TV: Settings > Device (or My Fire TV) > Developer Options > Turn on ADB Debugging & turn on Apps from Unknown Sources.
3. Set Up Android Debug Bridge (ADB) on Mac by installing Android SDK Platform-Tools through Homebrew in Terminal.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
```
brew install --cask android-platform-tools
```
4. Add ADB to Your Path by following STEP C as instructed here ([https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html#addadbpath](https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html#addadbpath)).
5. Connect to a Fire TV device through ADB by following STEP D as instructed here ([https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html#connectingadboptions](https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html#connectingadboptions)).
6. Once ADB connection is successful, in Web App Tester go to the Hosted Apps tab.
7. Type the following links for respective prototypes into the text box near the top of the page and click "Add" or "Save".
8. Click the Test App button to open respective prototypes.

For using the prototype on a Chrome browser,
1. Open the Developer Tools.
2. Select toggle device toolbar by clicking the phone/tablet icon.
3. Open the dropdown to see all of the default devices and select “Edit...” at the bottom of the list.
4. Select “Add custom device…“.
5. Input Name as "_Fire TV_", Width as "_1920_", Height as "_1080_", and User agent string as "_Mozillla/5.0 (Linux; Android 9; AFTSSS Build/PS7608.3615N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.114 Mobile Safari/537.36 cordova-amazon-fireos/3.4.0_" and select "_Desktop_".
6. Select "Add".
7. Go to the following links for respective prototypes.
  - Square Alphabetic: [https://cha1tany4.github.io/textinputsmarttv/squarealphabetic](https://cha1tany4.github.io/textinputsmarttv/squarealphabetic)
  - 2-Row Predictive: [https://cha1tany4.github.io/textinputsmarttv/2rowpredictive](https://cha1tany4.github.io/textinputsmarttv/2rowpredictive)
  - Single Row: [https://cha1tany4.github.io/textinputsmarttv/singlerow](https://cha1tany4.github.io/textinputsmarttv/singlerow)
  - Quad-Directional: [https://cha1tany4.github.io/textinputsmarttv/quaddirectional](https://cha1tany4.github.io/textinputsmarttv/quaddirectional)
8. Open the dropdown at the top again to see all of the default devices and select “Fire Tv” from the list.
