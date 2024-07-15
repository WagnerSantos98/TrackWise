const mongoose = require('mongoose');
const URI = 'mongodb+srv://wagnersjesus98:ogEfWgyyxIMx9mWL@clusterdev.r20aild.mongodb.net/track-wise?retryWrites=true&w=majority';

mongoose
    .connect(URI)
    .then(() => console.log('DB está conectado'))
    .catch(() => console.log(err));