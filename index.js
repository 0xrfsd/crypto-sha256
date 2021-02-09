const crypto = require('crypto');

let iv = crypto.randomBytes(16);

let hash = crypto
  .createHash('sha256')
  .update('your message')
  .digest('hex');

console.log(hash);
