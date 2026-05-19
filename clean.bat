@echo off
echo

REM
rd /s /q node_modules

REM
del /f /q package-lock.json

REM
npm install

REM
npx expo start -c