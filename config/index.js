exports.corsOptions = {
  // origin: process.env.PRODUCTION_CORS_URL || 'http://localhost:8081',
  origin: 'https://nostalgic-pasteur-f4a6fb.netlify.app',
};

exports.db_url =
  process.env.MONGODB_URI ||
  'mongodb+srv://adminUser:csAdmin1@cluster0-hbzic.mongodb.net/test?retryWrites=true&w=majority';
