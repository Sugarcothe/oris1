export const userAccessToken = () => {
	const token = localStorage.getItem("accessToken");
	token ? JSON.parse(localStorage.getItem("accessToken")) : localStorage.clear;
	return token;
};

export const userData = () => {
	const user = localStorage.getItem("user");
	user !== undefined
		? JSON.parse(localStorage.getItem("user"))
		: localStorage.clear;
	return JSON.parse(user);
};
