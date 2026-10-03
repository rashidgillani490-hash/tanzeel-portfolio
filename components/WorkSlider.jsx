import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const WorkSlider = () => {
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Orbit IDE',
      category: 'Currently in Development under NexCore',
      description: 'A custom Python-based integrated development environment featuring advanced architectural integration.',
      image: '/projects/orbit-ide.jpg',
      github: '#',
      demo: '#',
      tech: ['Python'],
      featured: true,
    },
    {
      id: 2,
      title: 'AI Voice Receptionist',
      category: 'AI Automation',
      description: 'An autonomous AI voice call agent designed for clinic management and automated customer interactions.',
      image: '/projects/ai-voice-receptionist.jpg',
      github: '#',
      demo: '#',
      tech: [],
      featured: false,
    },
    {
      id: 3,
      title: 'B2B Lead Generation System',
      category: 'AI Automation',
      description: 'An automated system designed to scale business-to-business lead generation and outreach efficiently.',
      image: '/projects/b2b-lead-generation.jpg',
      github: '#',
      demo: '#',
      tech: [],
      featured: false,
    },
    {
      id: 4,
      title: 'WhatsApp Bots & AI Chatbots',
      category: 'AI Chatbots',
      description: 'Intelligent conversational agents and automated response systems built for WhatsApp and other messaging platforms.',
      image: '/projects/whatsapp-ai-chatbots.png',
      github: '#',
      demo: '#',
      tech: ['WhatsApp'],
      featured: false,
    },
  ];

  const slides = [];
  for (let i = 0; i < projects.length; i += 2) {
    slides.push(projects.slice(i, i + 2));
  }

  return (
    <div className="w-full relative">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={600}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="h-[420px] w-full py-10"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 gap-6 h-full">
              {slide.map((project) => (
                <div
                  key={project.id}
                  className="glass-card group rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/10 border border-white/5"
                >
                  <div className="relative h-40 bg-primary/50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center text-white/20 text-5xl font-bold bg-primary/30';
                        fallback.textContent = project.title.charAt(0);
                        parent.appendChild(fallback);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-accent text-primary text-[9px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-accent/20">
                        <FaStar className="text-[8px]" /> Featured
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[9px] font-medium px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs mb-3 line-clamp-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="text-[8px] px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-white/40 hover:text-accent transition-colors group">
                        <FaGithub className="group-hover:scale-110 transition-transform" /> Code
                      </Link>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-white/40 hover:text-accent transition-colors group">
                        <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" /> Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Premium Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-accent text-white p-3 rounded-full transition-all duration-300 -ml-4 backdrop-blur-sm border border-white/10 hover:border-accent"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-accent text-white p-3 rounded-full transition-all duration-300 -mr-4 backdrop-blur-sm border border-white/10 hover:border-accent"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default WorkSlider;