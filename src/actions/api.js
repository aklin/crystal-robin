const baseURL = 'https://api.sampleapis.com/coffee/';

export const doGet = async (path) =>
	await (await fetch(`${baseURL}${path}`)).json();

/*
const doRequest = async (url, method) => {
	try {
		const response = await fetch(url, {
			method,
			// credentials:"omit",
			mode:"no-cors",
			headers:{
				accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			},
		});

		const text=await response.text();
		let json={};

		try{
			json=JSON.parse(text)
		}catch (e){
			console.error(e)
		}

		return {
			body: json,
			ok: response.ok,
		};

	} catch (e) {
		console.error('API call error');
		console.error(e);
	}
};
*/
