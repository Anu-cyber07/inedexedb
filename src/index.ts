import { get,set} from 'idb-keyval';
var CryptoJS = require("react-native-crypto-js");
var data = [{ id: 1, name: 'Anu' }, { id: 2, name: 'Abi' }]
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
//console.log('Encrypt Data -')
//console.log(ciphertext);
var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//console.log('decrypted Data -')
//console.log(decryptedData);
set('encrypt data',ciphertext );
set('decrypt data',decryptedData);
get('encrypt data').then(console.log)
get('decrypt data').then(console.log)
