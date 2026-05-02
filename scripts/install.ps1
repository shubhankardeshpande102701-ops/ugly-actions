$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$nodeDir = Join-Path $projectRoot ".tools\node-v24.15.0-win-x64"
$env:Path = "$nodeDir;$env:Path"

Set-Location $projectRoot
npm install
