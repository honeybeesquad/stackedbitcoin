#!/bin/bash

# Stacked Theme Deployment Script
# Deploys the updated Stacked theme to support.thestackedstack.xyz

echo "🚀 Deploying Stacked Theme to support.thestackedstack.xyz..."

# SSH connection details
SSH_HOST="89.167.9.162"
SSH_USER="root"
SSH_PASS="f2ayjhu"
REMOTE_DIR="Desktop/automation-stack/support-site"

# Files to upload
echo "📤 Uploading files..."

# Upload CSS directory
echo "  → Uploading CSS..."
sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -r ./css/ $SSH_USER@$SSH_HOST:$REMOTE_DIR/

# Upload Fonts directory
echo "  → Uploading Fonts..."
sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -r ./fonts/ $SSH_USER@$SSH_HOST:$REMOTE_DIR/

# Upload Templates directory
echo "  → Uploading Templates..."
sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -r ./templates/ $SSH_USER@$SSH_HOST:$REMOTE_DIR/

# Upload preview.html as index.html
echo "  → Uploading Index..."
sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no ./preview.html $SSH_USER@$SSH_HOST:$REMOTE_DIR/index.html

# Restart Caddy service
echo "🔄 Restarting Caddy service..."
sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST 'docker restart caddy-reverse-proxy'

# Test website
echo "🧪 Testing website..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://support.thestackedstack.xyz)

if [ "$response" = "200" ]; then
    echo "✅ Deployment successful! Website is live at https://support.thestackedstack.xyz"
else
    echo "❌ Deployment failed! HTTP Status: $response"
    exit 1
fi

echo "🎉 Stacked theme deployment complete!"