const ContactInfo = {
    contact_phone: "+971 50 616 8540",
    contact_email: "saeedanw443@gmail.com",
    address: "2 Street 49/1\n" +
        "Abu Dhabi\n" +
        "UAE",
    facebook: "https://tiger-transport.netlify.app/",
    twitter: "https://tiger-transport.netlify.app/",
    linkedin: "https://tiger-transport.netlify.app/",
    instagram: "https://tiger-transport.netlify.app/",
    youtube: "https://tiger-transport.netlify.app/",
}


const teamMembers = [
    {id: 1, name: "Alice Smith", title: "Project Manager"},
    {id: 2, name: "Bob Johnson", title: "Software Engineer"},
    {id: 3, name: "Catherine Lee", title: "UX Designer"},
    {id: 4, name: "David Brown", title: "Data Analyst"},
    {id: 5, name: "Emily Davis", title: "Marketing Specialist"},
    {id: 6, name: "Frank Wilson", title: "Quality Assurance"},
    {id: 7, name: "Grace Taylor", title: "Content Strategist"},
    {id: 8, name: "Henry Moore", title: "DevOps Engineer"},

];

const data = [
    {
        id: 1,
        name: "Available for booking",
        image: "car-1",
        desc: "Keep your goods fresh and frozen during transit with our temperature-controlled trucks. Ideal for long hauls of frozen cargo",
        category: "Freezer Van",
        price: "600 AED / PerDay"
    },
    {
        id: 2,
        name: "Available for booking",
        image: "car-2",
        desc: "Transport frozen items securely with our reliable freezer trucks. Designed to maintain consistent low temperatures throughout the journey",
        category: "Freezer Van",
        price: "600 AED / PerDay"
    },
    {
        id: 3,
        name: "Available for booking",
        image: "car-3",
        desc: "Ensure your frozen products stay at optimal temperatures. Our freezer trucks are perfect for bulk deliveries and long-distance trips",
        category: "Freezer Van",
        price: "600 AED / PerDay"
    },
    {
        id: 4,
        name: "Available for booking",
        image: "car-4",
        desc: "Maintain the perfect cool temperature for your perishable goods. Our chiller vans are ideal for short to medium distance deliveries",
        category: "Chiller Van",
        price: "550 AED / PerDay"
    },
]

const server_ip = 'http://localhost:800'

export {ContactInfo, teamMembers, server_ip, data}