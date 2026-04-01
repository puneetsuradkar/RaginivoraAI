# Set all required Vercel env vars using temp files (non-interactive)

$vars = @{
    "SMTP_USER" = "raginivoraai@gmail.com"
    "SMTP_PASS" = "mjuznvsulvyilewk"
    "CONTACT_EMAIL" = "raginivoraai@gmail.com"
    "ADMIN_PASSWORD" = "Raginivora@2025"
    "NEXT_PUBLIC_BASE_URL" = "https://raginivoraai.vercel.app"
}

foreach ($key in $vars.Keys) {
    $val = $vars[$key]
    $tmpFile = [System.IO.Path]::GetTempFileName()
    Set-Content -Path $tmpFile -Value $val -NoNewline
    Write-Host "Adding $key..."
    Get-Content $tmpFile | vercel env add $key production --force 2>&1
    Remove-Item $tmpFile
}

Write-Host "All env vars added! Deploying..."
vercel --prod --yes
