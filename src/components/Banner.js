import imghair1 from '../images/hair-cut1.jpg';
import imghair2 from '../images/hair-cut2.jpg';
import imghair3 from '../images/hair-cut3.jpg';

const bannerInfo = {
  title1: 'beard',
  title2: 'cut',
  btnName: 'BOOK NOW',
  bannerContent:
    'A short beard cut is a style of facial hari grooming where the beard is trimmed to a relatively short length, typically ranging from stubble to a few centimeters in length. Short beard styles are characterized by neatly trimmed, well-defined lines and minimal facial hair growth.',
};
const feachers = {
  dot1Text: 'Hair',
  dot2Text: 'Nails',
  dot3Text: 'Beard',
  dot4Text: 'Skin',
};

function Banner() {
  return (
    <>
      <section className="banner-wrapper">
        <div
          style={{ border: '1px solid transparent' }}
          className="container px-0"
        >
          <div className="row" style={{ marginTop: '300px' }}>
            <div className="col-md-7 col7">
              <div style={{ position: 'relative' }}>
                <img src={imghair1} className="img-1" alt="image1" />
                <img src={imghair2} className="img-2" alt="image2" />
                <img src={imghair3} className="img-3" alt="image3" />
              </div>
            </div>
            <div className="col-md-5 banner-right text-end">
              <span className="banner-hd1">{bannerInfo.title1}</span>
              <span className="banner-hd2">{bannerInfo.title2}</span>
              <br />
              <button className="btn btn-booknow">{bannerInfo.btnName}</button>
              <p>{bannerInfo.bannerContent}</p>
            </div>
          </div>

          <div className="row justify-content-center dots-row">
            <div className="dots-wrapper">
              <div className="dots">
                <i className="fa-solid fa-chair"></i>
              </div>
              <span>{feachers.dot1Text}</span>
            </div>
            <div className="dots-wrapper">
              <div className="dots">
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <span>{feachers.dot2Text}</span>
            </div>
            <div className="dots-wrapper">
              <div className="dots">
                <i className="fa-solid fa-palette"></i>
              </div>
              <span>{feachers.dot3Text}</span>
            </div>
            <div className="dots-wrapper">
              <div className="dots">
                <i className="fa-solid fa-sink"></i>
              </div>
              <span>{feachers.dot4Text}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
