@echo off
echo ==============================================
echo  Subiendo portafolio a GitHub Pages...
echo ==============================================
cd /d "%~dp0"
git push -u origin main --force
if %errorlevel% equ 0 (
    echo.
    echo ==============================================
    echo  Subida completada con exito!
    echo ==============================================
) else (
    echo.
    echo ==============================================
    echo  Hubo un error al subir. Revisa tus credenciales.
    echo ==============================================
)
pause
