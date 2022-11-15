import Icon from "../Components/Icon";

const NextArrow = (props) => {
    const { onClick, className } = props
    const newClass = className.indexOf("slick-disabled") > 0 ? "hidden" : "inline-block"
    return (
        <button
            className={`absolute top-1/2 -translate-y-1/2 z-10 mx-2 -right-1 bg-accent hover:bg-accent/80 duration-500 text-light rounded-full p-2 ${newClass}`}
            onClick={onClick}
        >
            <Icon name="chevron-right" />
        </button>
    );
};
const PrevArrow = (props) => {
    const { onClick, className } = props;
    const newClass = className.indexOf("slick-disabled") > 0 ? "hidden" : "inline-block";

    return (
        <button
            className={`absolute top-1/2 -translate-y-1/2 z-10 -left-1 mx-2 bg-accent hover:bg-accent/80 duration-500 text-light rounded-full p-2 ${newClass}`}
            onClick={onClick}
        >
            <Icon name="chevron-left" />
        </button>
    );
};

export const productSliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToslide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1048,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToslide: true,
            },
        },
        {
            breakpoint: 770,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                swipeToslide: true,
            },
        },
        {
            breakpoint: 500,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToslide: true,
            },
        },
    ],
};

export const offerSlidersettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToslide: true,
    autoplay: true,
    autplaySpeed: 8000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToslide: true,
                autoplay: true,
                autplaySpeed: 8000,
                cssEase: "ease-in-out",
                pauseOnHover: true,
            },
        },
    ],
};
