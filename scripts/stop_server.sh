#!/bin/bash

echo "Checking for running Node.js servers..."

echo "Stopping all running Node.js servers..."
pkill -f "node index.js"
echo "All Node.js servers have been stopped."

