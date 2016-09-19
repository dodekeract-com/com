// import external

import 'babel-polyfill';
import koa from 'koa';
import koaStatic from 'koa-static';

//

const app = koa();

app.use(koaStatic(`${__dirname}/../client/`));

const {port, address} = {
	port: 45000,
	address: '127.0.0.1'
};

app.listen(port, address, () => {
	console.info(`Listening on http://${address}:${port}`);
});
