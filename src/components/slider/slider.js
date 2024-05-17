import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
export const Slider = ({ imgSrc }) => {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Keyboard, Pagination, Navigation]}
				className="mySwiper"
			>
				{imgSrc.map((elem, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={elem} alt="Pixel Pioneers" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
