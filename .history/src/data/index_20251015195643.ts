export const SITE_TITLE = "whewchews";
export const SITE_DESCRIPTION = "A internet space for whewchews.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "whewchews",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
	{
		label: "chips",
		url: "/chips",
	},
	{
		label: "tinker",
		url: "/tinker",
	},
	{
		label: "archive",
		url: "/archive",
	},
];

export const title = "whewchews";
export const description = "A internet space for whewchews.";
export const image = "/images/ogimage.png";
export const url = "https://whewchews.sh";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "whewchews's Space",
};




export const socialLinks = [
	
	{
		label: "email",
		url: "mailto:suna.namgung@gmail.com",
	},
	{
		label: "github",
		url: "https://github.com/whewchews",
	},
		// {
		// 	label: "linkedin",
		// 	url: "https://www.linkedin.com/in/",
		// },
];
