$nodePath = "C:\Shubh\UglyAction\.tools\node-v24.15.0-win-x64\node.exe"

Get-Process node -ErrorAction SilentlyContinue |
  Where-Object { $_.Path -eq $nodePath } |
  Stop-Process -Force

Write-Host "Stopped Ugly Actions local server."
