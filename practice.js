const newRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure("connection timeout :(");
		} else {
			success(`Here is the data ${url}`);
		}
	}, delay);
};

newRequestCallback(
	"google.com",
	() => {
		console.log("it worked!!!");
	},
	() => {
		console.log("Error!!! :(");
	}
);
