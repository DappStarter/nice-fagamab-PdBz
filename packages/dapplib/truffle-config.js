require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food gravity recipe mad promote giraffe light army gather'; 
let testAccounts = [
"0x4bdea902339c061942bc318ed5fcf2eb1b8eeaed09452e1369b1101e13337894",
"0x2cae0c11c6d88719a5741e39a70b2e8714889e0c195321b7b3490356726f1f34",
"0xfa96c711db1f1584152f1bb47c103b1bf4f2a5630afb4aec4f5fec3a9b218b36",
"0xbec39027934b60e3e4dced6e68a1d0430d51eab697ad6903a098ca20aa07b46c",
"0xe7b2df5d75af686523b480ff7b2076d8bba4172e1c683cd49f162994740331ff",
"0x0d0687678b4c517c7d1efeaaa82b1b685b1b3796515cd34cd5d25ca0e11e3b9a",
"0x5228742ba1db944c17976b79fc5b04e4f196cedb3d1626a65c403b9fbf9c07e7",
"0xeb749a5bb0b8733429029e9a8be0195620a32cc34b8ecef628f2306e36c5b546",
"0xf551c1282f330190194c52c592a01b4e733bd46c08978cacce5dc16464a311e6",
"0xf08541524256433a8d74c752583b763dcb8e24bdda42382849571515533a37e9"
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
            version: '^0.8.0'
        }
    }
};

