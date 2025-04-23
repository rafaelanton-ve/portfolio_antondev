interface Certifications {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    icon: string;
    currentUni: boolean;
}

const  certifications: Certifications[] = [
    {
        title: "Make Themes for Wordpress",
        startDate: "2015",
        endDate: "2018",
        school: "University of Carabobo",
        location: "Venezuela",
        icon: "wordpress_iconblue",
        currentUni: true,
    },
    {
        title: "PHP Course: Integration with HTML",
        startDate: "2015",
        endDate: "2018",
        school: "University of Carabobo",
        location: "Venezuela",
        icon: "php_iconblue",
        currentUni: false,
    },
];

export default certifications;