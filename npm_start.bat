@echo off
echo === Starting npm install in a new terminal ===
start "Installing Dependencies" cmd /k "npm install"

echo === Starting Dev Server in a new terminal ===
start "Dev Server" cmd /k "npm run dev"

echo === Waiting for a few seconds ===
timeout /t 5

echo === Trying to open the browser ===
start http://localhost:3000

exit