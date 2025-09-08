#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-manager-18828-18837/recipes_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

