#!/usr/bin/env bash

EXCLUDE_FILES="
node_modules
applitools.private.config.js
"

VAR=""
for ELEMENT in $EXCLUDE_FILES; do
  VAR+="-e ${ELEMENT} "
done

# Remove untracked files from the working tree, except excluded.
echo Delete untracked files
git clean -fdxq $VAR

echo Done!
