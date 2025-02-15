#!/bin/bash

echo "Checking for running Node.js servers..."

# Find all running Node.js processes
if pgrep node > /dev/null; then
    echo "Stopping all running Node.js servers..."
    pkill -f "node index.js"
    echo "All Node.js servers have been stopped."
else
    echo "No Node.js servers are currently running."
fi
