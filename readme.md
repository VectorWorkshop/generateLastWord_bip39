# generateLastWord_bip39

This tool can help you if you find it hard to memorise your bip39 mnemonic (bitcoin, etherium etc. use it).

You can create it by yourself, but in most cases it won't be valid.

Delete last word , generate it with this tool and choose valid.

# People who made it possible

This is fork of iancoleman's jsbip39 https://github.com/iancoleman/jsbip39

That repository ported from the reference implementation at https://github.com/trezor/python-mnemonic

Mnemonic code for generating deterministic keys

BIP39 Specification at https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki

This code uses asmCrypto
https://github.com/tresorit/asmcrypto.js

The people who authored and contributed to BIP39 and the reference client

# Usage

Create mnemonic using [wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md). Choose from there 11, 14, 17, 20, 23 words separated by spaces

Clone or download .zip and extract the archive

Open index.html with browser and press F12 to open devepoper tools

Swith to console tab and type command:

```js
generateLastWord("<your mnemonic>")
```

If you want to use language other than english use:

```js
generateLastWord("<your mnemonic>", language="<language>")
```

# Supported Languages

```js
"english"
"japanese"
"spanish"
"chinese_simplified"
"chinese_traditional"
"french"
"italian"
"korean"
```
