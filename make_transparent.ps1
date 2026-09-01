Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("c:\Users\Hp\Desktop\maa sharda\app\icon.png")
$bmp.MakeTransparent([System.Drawing.Color]::White)
$bmp.Save("c:\Users\Hp\Desktop\maa sharda\app\icon_transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Move-Item -Path "c:\Users\Hp\Desktop\maa sharda\app\icon_transparent.png" -Destination "c:\Users\Hp\Desktop\maa sharda\app\icon.png" -Force
