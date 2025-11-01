import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaLock,
    FaGithub,
    FaDatabase,
    FaCloud,
} from 'react-icons/fa';
import {
    SiMongodb,
    SiMongoose,
    SiRedux,
    SiExpo,
    SiCloudinary,
    SiJsonwebtokens,
    SiSocketdotio,
    SiPaypal,
    SiWhatsapp,
    SiVite,
    SiTypescript,
    SiDotnet,
    SiAxios,
} from 'react-icons/si';


export const TechIcon = ({ tech }) => {
    const size = 20;

    switch (tech.toLowerCase()) {
        case 'react':
        case 'react native':
            return <FaReact size={size} title={tech} />;
        case 'expo':
            return <SiExpo size={size} title="Expo" />;
        case 'express':
            return <FaNodeJs size={size} title="Express" />;
        case 'mongodb':
            return <SiMongodb size={size} title="MongoDB" />;
        case 'mongoose':
            return <SiMongoose size={size} title="Mongoose" />;
        case 'zustand':
            return <FaCloud size={size} title="Zustand" />;
        case 'redux':
            return <SiRedux size={size} title="Redux" />;
        case 'jwt':
        case 'jwt authentication':
            return <SiJsonwebtokens size={size} title="JWT" />;
        case 'cloudinary':
            return <SiCloudinary size={size} title="Cloudinary" />;
        case 'sockets io':
        case 'socket.io':
            return <SiSocketdotio size={size} title="Socket.IO" />;
        case 'clerk':
            return <FaLock size={size} title="Clerk" />;
        case 'html':
            return <FaHtml5 size={size} title="HTML" />;
        case 'css':
            return <FaCss3Alt size={size} title="CSS" />;
        case 'paypal api':
            return <SiPaypal size={size} title="PayPal API" />;
        case 'monday api':
            return <FaCloud size={size} title="Monday API" />;
        case 'whatsapp business api':
            return <SiWhatsapp size={size} title="WhatsApp Business API" />;
        case 'vite':
            return <SiVite size={size} title="Vite" />;
        case 'typescript':
            return <SiTypescript size={size} title="TypeScript" />;
        case '.net core':
        case 'dotnet':
            return <SiDotnet size={size} title=".NET Core" />;
        case 'azure':
            return <FaCloud size={size} title="Azure" />;
        case 'sql server':
            return <FaDatabase size={size} title="SQL Server" />;
        case 'axios':
            return <SiAxios size={size} title="Axios" />;
        default:
            return <FaGithub size={size} title={tech} />;
    }
};
