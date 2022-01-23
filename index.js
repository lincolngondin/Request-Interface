
document.querySelector('#button').onclick = () => {
	getResponse().then(text=>{
		document.querySelector('#response').innerText = text;
	})
}

document.querySelector('#button__more-headers').onclick = ()=>{
	const elemento = document.createElement('div');
	elemento.innerHTML = '<input type="text" name=""/>\n<span>:</span>\n<input type="text" name=""/>';
	document.querySelector('#headers__list').appendChild(elemento);
}

const getHeaders = ()=>{
	let obj = {};
	[...document.querySelector('#headers__list').children].forEach(e=>{
		const name = e.children[0].value;
		const value = e.children[2].value
		if( !!name )
			obj[name] = value;
	});
	console.log(obj);
	return obj;
}

const getResponse = async () => {
	const response = await fetch(getUrl(), {
		method: getMethod(),
		headers: getHeaders()
	});
	const text = await response.text();
	return text;
}

const getUrl = () =>{
	return document.querySelector('#url').value;
}
const getMethod = () =>{
	return document.querySelector('#method').value;
}

console.log(getMethod())

