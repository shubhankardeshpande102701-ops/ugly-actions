$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

$repoOwner = "shubhankardeshpande102701-ops"
$repoName = "ugly-actions"
$repoFullName = "$repoOwner/$repoName"

git config --global --add safe.directory $projectRoot

Write-Host "Checking GitHub CLI authentication..." -ForegroundColor Cyan
gh auth status

Write-Host "Creating private GitHub repo if needed: $repoFullName" -ForegroundColor Cyan
gh repo view $repoFullName *> $null
if ($LASTEXITCODE -ne 0) {
  gh repo create $repoFullName --private --description "Ugly Actions athletic wear storefront" --source=. --remote=origin --push
} else {
  git remote remove origin 2>$null
  git remote add origin "https://github.com/$repoFullName.git"
  git push -u origin main
}

Write-Host "Pushed to https://github.com/$repoFullName" -ForegroundColor Green
