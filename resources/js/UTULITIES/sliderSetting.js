export const productSliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToslide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                swipeToslide: true,
            },
        },
        {
            breakpoint: 770,
            settings: {
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                swipeToslide: true,
            },
        },
        {
            breakpoint: 500,
            settings: {
                dots: true,
                infinite: false,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToslide: true,
            },
        },
    ],
};

export const  offerSlidersettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll:1,
    swipeToslide: true,
    autoplay: true,
    autplaySpeed: 8000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          dots:false,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll:1,
          swipeToslide: true,
          autoplay: true,
          autplaySpeed: 8000,
          cssEase: "ease-in-out",
          pauseOnHover: true,
        }
      }
    ]
  }
