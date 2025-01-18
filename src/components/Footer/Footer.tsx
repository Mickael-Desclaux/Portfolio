import { Typography } from '@material-tailwind/react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    const contacts = [
        {
            icon: <Phone size={20} />,
            label: "Téléphone",
            value: "07 71 14 54 30",
            link: "tel:+33771145430"
        },
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "mickael.desclaux.arramond.emploi@gmail.com",
            link: "mailto:mickael.desclaux.arramond.emploi@gmail.com"
        },
        {
            icon: <MapPin size={20} />,
            label: "Adresse",
            value: "33450 Saint-Sulpice-et-Cameyrac",
            link: "https://maps.google.com/?q=33450+Saint-Sulpice-et-Cameyrac"
        },
        {
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            value: "Mickaël Desclaux-Arramond",
            link: "https://www.linkedin.com/in/mickaël-desclaux-arramond"
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            value: "Mickael-Desclaux",
            link: "https://github.com/Mickael-Desclaux"
        }
    ];

    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="max-w-4xl mx-auto">
                <Typography variant='h3' className="font-bold text-center mb-8">Mes coordonnées</Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 m-4">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                        >
                            <div className="text-blue-400">
                                {contact.icon}
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">{contact.label}</div>
                                <div className="text-gray-200 text-sm md:text-lg">{contact.value}</div>
                            </div>
                            <ExternalLink size={16} className="ml-auto text-gray-400" />
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>© {currentYear} Mickaël Desclaux-Arramond. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};