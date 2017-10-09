
cd ~/working-directory/
npm install
react-native run-ios

===

rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios
