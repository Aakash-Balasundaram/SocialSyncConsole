import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Analysis() {
    const platforms = [
        {
            name: 'Facebook',
            icon: FaFacebook,
            color: 'bg-blue-600',
            bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-400',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-blue-600',
            hoverBgAlt: 'hover:bg-blue-600'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
            bgGradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-pink-600',
            hoverBgAlt: 'hover:bg-pink-600'
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            color: 'bg-green-500',
            bgGradient: 'bg-gradient-to-r from-green-500 to-green-400',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-green-600',
            hoverBgAlt: 'hover:bg-green-600'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            color: 'bg-blue-700',
            bgGradient: 'bg-gradient-to-r from-blue-700 to-blue-600',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-blue-700',
            hoverBgAlt: 'hover:bg-blue-700'
        },
        {
            name: 'YouTube',
            icon: FaYoutube,
            color: 'bg-red-600',
            bgGradient: 'bg-gradient-to-r from-red-600 to-red-400',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-red-600',
            hoverBgAlt: 'hover:bg-red-600'
        },
        {
            name: 'X (Twitter)',
            icon: FaXTwitter,
            color: 'bg-black',
            bgGradient: 'bg-gradient-to-r from-gray-800 to-black',
            hoverBg: 'hover:bg-white',
            hoverText: 'hover:text-gray-800',
            hoverBgAlt: 'hover:bg-gray-800'
        }
    ];

    return (
        <div className="min-h-screen">
            <div className='honk-regular text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center'>
                ANALYSIS
            </div>
            
            <div className="flex flex-col items-center justify-center gap-[2rem] max-w-[100%] mx-auto mt-[2rem]">
                {platforms.map((platform, index) => {
                    const IconComponent = platform.icon;
                    return (
                        <div key={index} className="w-full">
                            <div className={`${platform.bgGradient} ${platform.hoverBg} rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 relative group cursor-pointer z-10`}>                        
                                {/* Main content */}
                                <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between p-[1.5rem] lg:p-[2rem] text-white ${platform.hoverBgAlt} hover:text-white relative z-10 transition-colors duration-300 gap-[3rem] lg:gap-[4rem]`}>
                                    {/* Left side - Icon and Platform name */}
                                    <div className="flex items-center gap-[1.5rem] mb-[1rem] lg:mb-0">
                                        <div className="bg-opacity-20 group-hover:bg-opacity-100 p-[0.5rem] rounded-lg transition-all duration-300">
                                            <IconComponent className={`text-[1.5rem] lg:text-[2rem] ${platform.hoverText} transition-colors duration-300`} />
                                        </div>
                                        <div>
                                            <h3 className="text-[1rem] lg:text-[1.5rem] font-bold">{platform.name}</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Right side - Analytics data */}
                                    <div className="flex gap-[1rem] lg:gap-[2rem] w-full lg:w-auto justify-around lg:justify-end">
                                        <div className="text-center min-w-[4rem]">
                                            <div className="text-[1rem] lg:text-[1.2rem] font-bold">
                                                {platform.name === 'Facebook' ? '2.5M' : 
                                                 platform.name === 'Instagram' ? '1.8M' :
                                                 platform.name === 'WhatsApp' ? '850K' :
                                                 platform.name === 'LinkedIn' ? '450K' :
                                                 platform.name === 'YouTube' ? '1.2M' : '920K'}
                                            </div>
                                            <div className="text-[0.7rem] lg:text-[0.8rem] opacity-80 group-hover:opacity-100 transition-opacity duration-300">Followers</div>
                                        </div>
                                        
                                        <div className="text-center min-w-[4rem]">
                                            <div className="text-[1rem] lg:text-[1.2rem] font-bold">
                                                {platform.name === 'Facebook' ? '4.2%' : 
                                                 platform.name === 'Instagram' ? '6.8%' :
                                                 platform.name === 'WhatsApp' ? '8.5%' :
                                                 platform.name === 'LinkedIn' ? '3.9%' :
                                                 platform.name === 'YouTube' ? '5.7%' : '3.1%'}
                                            </div>
                                            <div className="text-[0.7rem] lg:text-[0.8rem] opacity-80 group-hover:opacity-100 transition-opacity duration-300">Engagement</div>
                                        </div>
                                        
                                        <div className="text-center min-w-[4rem]">
                                            <div className="text-[1rem] lg:text-[1.2rem] font-bold">
                                                {platform.name === 'Facebook' ? '+2.1%' : 
                                                 platform.name === 'Instagram' ? '+4.3%' :
                                                 platform.name === 'WhatsApp' ? '+3.7%' :
                                                 platform.name === 'LinkedIn' ? '+1.8%' :
                                                 platform.name === 'YouTube' ? '+5.2%' : '+2.9%'}
                                            </div>
                                            <div className="text-[0.7rem] lg:text-[0.8rem] opacity-80 group-hover:opacity-100 transition-opacity duration-300">Growth</div>
                                        </div>
                                        
                                        <div className="text-center min-w-[4rem]">
                                            <div className="text-[1rem] lg:text-[1.2rem] font-bold">
                                                {platform.name === 'Facebook' ? '82%' : 
                                                 platform.name === 'Instagram' ? '91%' :
                                                 platform.name === 'WhatsApp' ? '78%' :
                                                 platform.name === 'LinkedIn' ? '74%' :
                                                 platform.name === 'YouTube' ? '88%' : '76%'}
                                            </div>
                                            <div className="text-[0.7rem] lg:text-[0.8rem] opacity-80 group-hover:opacity-100 transition-opacity duration-300">Performance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}