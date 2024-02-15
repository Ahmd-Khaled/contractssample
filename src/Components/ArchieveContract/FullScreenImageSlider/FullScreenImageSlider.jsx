import styles from "./styles.module.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FullScreenImageSlider = ({ imagesList, close, trueUrl }) => {
  return (
    <div className={styles.fullScreenImage}>
      <div className={styles.container}>
        {/* <div className={styles.image}>
          <img
            className={styles.img}
            src={trueUrl ? clickedImg : URL.createObjectURL(clickedImg)}
            alt="contract"
          />
        </div> */}
        <div className={styles.slider}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            // spaceBetween={26}
            slidesPerView={1}
            speed={500}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.contractImgsSwiper}
          >
            {imagesList?.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.imageDetails}>
                  <ul className={styles.detailsList}>
                    <li className={styles.item}>
                      <p className={styles.itemValue}>
                        {item.type === "1" ? (
                          <span className={styles.contract}>صورة العقد</span>
                        ) : null}
                        {item.type === "2" ? (
                          <span className={styles.testmo}>صورة الإستبيان</span>
                        ) : null}
                        {item.type === "3" ? (
                          <span className={styles.board}>صورة اللوحة</span>
                        ) : null}
                        {item.type === "4" ? (
                          <span className={styles.banner}>صورة الملصق</span>
                        ) : null}
                      </p>
                    </li>
                    <li className={styles.item}>
                      <p className={styles.text}>
                        <span className={styles.name}>أرشف بواسطة:</span>
                        <span className={styles.value}>
                          {item.uploader_name}
                        </span>
                      </p>
                      <p className={styles.text}>
                        <span className={styles.name}>أنشأ في:</span>
                        <span className={styles.value}>
                          {item.created_at}
                        </span>
                      </p>
                    </li>
                  </ul>
                  <div className={styles.image}>
                    <img
                      className={styles.img}
                      src={trueUrl ? item.file : URL.createObjectURL(item.file)}
                      alt="contract"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <IoMdCloseCircle onClick={close} className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default FullScreenImageSlider;
