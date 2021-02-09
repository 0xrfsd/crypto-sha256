const crypto = require('crypto');

let hash = crypto
  .createHash('sha256')
  .update('your message')
  .digest('hex');

console.log(hash);
