import { IncomingMessage, ServerResponse } from 'http';

export default async function ( req: IncomingMessage, res: ServerResponse ) {
	if ( req.method !== 'POST' ) {
		res.statusCode = 405; // Метод не разрешен
		res.end();
		return;
	}

	let body = '';
	req.on( 'data', chunk => {
		body += chunk.toString();
	} );

	req.on( 'end', () => {
		const data = JSON.parse( body );
		const { name, email, password } = data as { name: string; email: string; password: string };

		try {
			// Здесь можно добавить логику для проверки и сохранения данных в базу данных

			// Отправка ответа с подтверждением регистрации
			res.statusCode = 200;
			res.setHeader( 'Content-Type', 'application/json' );
			res.end( JSON.stringify( { message: 'Registration successful' } ) );
		} catch ( error ) {
			// Обработка ошибок
			console.error( 'Registration error:', error );
			res.statusCode = 500;
			res.setHeader( 'Content-Type', 'application/json' );
			res.end( JSON.stringify( { message: 'Registration error' } ) );
		}
	} );
};
