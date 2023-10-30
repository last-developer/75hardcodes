const isProduction = process.env.IS_PRODUCTION;
let baseUrl;

if (isProduction) {
  baseUrl = 'https://75hardcodes-backend.vercel.app/api';
} else {
  baseUrl = 'http://localhost:3000/api';
}

export default baseUrl;