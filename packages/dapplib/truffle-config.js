require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift raise stereo hole half clinic equal gauge'; 
let testAccounts = [
"0x8d9275bdfb5b0a279229fe29c94fe845bbac124abb008eb8a483043ab1071ea7",
"0x795d803f0bddcb0f99167b35b050d525617aefa255da8d28a79651a2cb25089f",
"0x42d19600752b101ea7d680f79006d304eb3c7b593d999712c049b7785c8a39fe",
"0xb50f6cd7066fa1784858d4cb57a2b4e3ae04b81dd59a7b06efcdebe3424b7979",
"0x38578995fe0f262d6d45ca0119e194085feed35a4b466ca213a3329575565d63",
"0x84b48a5dd5842f938e91394b6e433b1736759cbaaf5a76d556389e4e595e7cd4",
"0x294b88ff9fcc87a99f7dd1d945c21f988d68e3a76d04dbb834fedfd6e7eeefbd",
"0x403ca8a65319c70a8ea0f83fbe3d228f0e2c37b2191fc9e92b06f36fd8c96f9e",
"0xe30b4e26c309938c2272918381e130aabae40988efe535b83ba7a53b1f4fca76",
"0xc93c54095e379fd6b5f327268816dde97ca4262355e82848d8558cbcb2805fbf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
