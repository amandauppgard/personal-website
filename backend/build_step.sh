#!/bin/bash
set -e

echo "Build frontend and copy to backend"

cd ../frontend
npm install
npm run build

rm -rf ../backend/dist
cp -r dist ../backend

echo "Installing backend dependencies"

cd ../backend
npm install