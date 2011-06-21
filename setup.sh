#!/bin/bash

TRANS_JA_PATH="${PWD}/ja"
DIST_PATH="${PWD}/dist"

if ! test -d ${DIST_PATH}
then
    mkdir ${DIST_PATH}
fi

for FILE_PATH in $(find ${TRANS_JA_PATH} -type f -name "*.ja")
do
    NEW_FILE_PATH="${DIST_PATH}/${FILE_PATH##*/}"
    echo -ne '\xFF\xFE' > ${NEW_FILE_PATH} # UTF-16LE Bytecode
    iconv -f "utf-8" \
          -t "utf-16le" \
          ${FILE_PATH} >> ${NEW_FILE_PATH}
    mv ${NEW_FILE_PATH} ${NEW_FILE_PATH%.ja}.int
done
