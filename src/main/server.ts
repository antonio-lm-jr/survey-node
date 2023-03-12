import app from './config/app';

app
  .listen(3000, () => {
    console.log(`Server UP on port ${3000}`);
  })
  .setTimeout(5000);
