const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateindex', true);
mongoose.set('useunifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB está conectado'))
    .catch(() => console.log(err));