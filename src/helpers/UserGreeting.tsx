export const userGreeting = () => {
	const myDate = new Date();
	const hours = myDate.getHours();

	if (hours < 12) return "Good Morning";
	else if (hours >= 12 && hours <= 17) return "Good Afternoon";
	else if (hours >= 17 && hours <= 24) return "Good Evening";
	return "Howdy";
};
