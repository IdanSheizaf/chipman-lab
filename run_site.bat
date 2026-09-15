@echo off
cd /d "%~dp0"
title The Evo Devo Lab Website Runner
echo =======================================================
echo   The Evo Devo Lab - Prof. Ariel Chipman
echo   Starting local server at http://localhost:8000 ...
echo =======================================================
echo.
start http://localhost:8000
python server.py
if errorlevel 1 (
  python -m http.server 8000
)
pause
