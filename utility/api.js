const axios = require('axios') 
const baseUrl = process.env.BACKEND_SERVER || "https://dev.bitrix24.net.vn/rest/1/cbz17ui0p2yvernr";
//request interceptor to add the auth token header to requests
// axios.interceptors.request.use(
// 	(config) => {

// 		config.validateStatus = function (status) {
// 			return status >= 200 && status < 500 && status !== 401;
// 		};
// 		const accessToken = localStorage.getItem("accessToken");
		
// 		if (accessToken) {
// 			config.headers["Authorization"] = `${accessToken}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		Promise.reject(error);
// 	}
// );

axios.defaults.withCredentials = true;
//user
module.exports.adduser = (body) => {
	return axios.post(`${baseUrl}/let.game.user.add`, body)
};

module.exports.login = (body) => {
	return axios.post(`${baseUrl}/let.game.user.login`, body)
};

module.exports.update = (body) => {
	return axios.post(`${baseUrl}/let.game.user.update`, body)
};

module.exports.getuser = (body) => {
	return axios.post(`${baseUrl}/let.game.user.get`, body)
};

module.exports.recoveryreset = (body) => {
	return axios.post(`${baseUrl}/let.game.user.recovery.reset`, body)
};

module.exports.recoveryrequest = (body) => {
	return axios.post(`${baseUrl}/let.game.user.recovery.request`, body)
};

module.exports.recoveryupdate = (body) => {
	return axios.post(`${baseUrl}/let.game.user.recovery.update`, body)
};
	
//game

module.exports.gamelaunch = (body) => {
	return axios.post(`${baseUrl}/let.game.game.launch`, body)
};

module.exports.gamejoin = (body) => {
	return axios.post(`${baseUrl}/let.game.game.join`, body)
};


