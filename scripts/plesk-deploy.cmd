@echo off
setlocal
cd /d "%~dp0\.."

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js/npm is not installed on this Plesk server.
  echo Use GitHub Actions deploy instead, or install Node.js in Plesk.
  exit /b 1
)

call npm ci
if errorlevel 1 exit /b 1

call npm run build
if errorlevel 1 exit /b 1

if not exist "out\index.html" (
  echo Build failed: out\index.html missing
  exit /b 1
)

robocopy "out" "..\httpdocs" /E /IS /IT /NFL /NDL /NJH /NJS /nc /ns /np
set RC=%ERRORLEVEL%
if %RC% GEQ 8 exit /b 1
exit /b 0
