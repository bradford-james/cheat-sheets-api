const corsURL =
  process.env.NODE_ENV == 'production'
    ? process.env.PRODUCTION_CORS_URL
    : 'http://localhost:8081';

exports.corsOptions = {
  origin: corsURL,
};

const dbURL =
  process.env.NODE_ENV == 'production'
    ? process.env.PROD_MONGODB_URI
    : 'mongodb://localhost:27017';

exports.db_url = dbURL;
