exports.corsOptions = {
  origin: process.env.PRODUCTION_CORS_URL || 'http://localhost:8081',
};

exports.db_url =
  process.env.MONGODB_URI ||
  'mongodb+srv://adminUser:csAdmin1@cluster0-hbzic.mongodb.net/test?retryWrites=true&w=majority';
