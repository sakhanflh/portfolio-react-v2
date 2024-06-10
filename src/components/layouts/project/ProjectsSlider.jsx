import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProjectsData } from '../../data/ProjectsData';
import { ProjectsCard } from './ProjectsCard';

export function ProjectsSlider() {
    return (
        <>
            <div className='bg-red-500'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    // loop={true}
                    pagination={{ clickable: true }}
                >
                    {ProjectsData.map((project, index) => (
                        <SwiperSlide key={index} >
                            <ProjectsCard
                                title={project.title}
                                desc={project.desc}
                                image={project.image}
                                url={project.url}
                                id={project.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}