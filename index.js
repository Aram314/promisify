function promisify (func) {
	return (...rest) => {
		return new Promise((resolve,reject) => {
			func(...rest, (err, data) => {
				if(err) {
					reject(err)
				}
				resolve(data);
			})
		})
	}
}

module.exports = promisify;
