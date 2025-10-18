const { config } = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
console.log('🔍 Loading .env from:', envPath);
console.log('📁 Current working directory:', process.cwd());
console.log('📁 __dirname:', __dirname);

const result = config({
    path: envPath
});

if (result.error) {
    console.error('❌ Error loading .env file:', result.error);
} else {
    console.log('✅ .env file loaded successfully');
}

console.log('🔑 Environment variables loaded:');
console.log('- PRIVATE_KEY:', process.env.PRIVATE_KEY ? '***PRESENT***' : 'MISSING');
console.log('- RPC_URL:', process.env.RPC_URL ? '***PRESENT***' : 'MISSING');
console.log('- ETHERSCAN_API_KEY:', process.env.ETHERSCAN_API_KEY ? '***PRESENT***' : 'MISSING');