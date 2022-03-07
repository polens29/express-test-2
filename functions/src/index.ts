import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors({ origin: true }));

app.get('/hello-world', (req: any, res: any) => {
  return res.status(200).send('Hello World!');
});

exports.app = functions.https.onRequest(app);
