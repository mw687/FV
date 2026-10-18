#!/bin/sh
cd "/Users/mohamedwael/Desktop/FV Website" || exit 1
export PATH="/Users/mohamedwael/.local/node-runtime/bin:$PATH"
exec npm run dev
