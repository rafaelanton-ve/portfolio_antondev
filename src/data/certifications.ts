interface Certifications {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  certifications: Certifications[] = [
    {
        title: "Make Themes for Wordpress",
        startDate: "2015",
        endDate: "2018",
        school: "University of Carabobo",
        location: "Venezuela",
        description: "",
        currentUni: true,
    },
    {
        title: "Bachelor of Financial Management",
        startDate: "2012",
        endDate: "2015",
        school: "Technical School Miguel Peña",
        location: "Venezuela",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        currentUni: false,
    },
];

export default certifications;