import imghair1 from '../images/hair-cut1.jpg';
import imghair2 from '../images/hair-cut2.jpg';
import imghair3 from '../images/hair-cut3.jpg';
function Banner() {
  return (
    <>
      <section className="banner-wrapper">
        <div style={{ border: '1px solid red' }} className="container px-0">
          <div className="row" style={{ marginTop: '300px' }}>
            <div className="col-md-7 col7">
              <div style={{ position: 'relative' }}>
                <img src={imghair1} className="img-1" alt="image1" />
                <img src={imghair2} className="img-2" alt="image2" />
                <img src={imghair3} className="img-3" alt="image3" />
              </div>
            </div>
            <div className="col-md-5 banner-right text-end">
              <span className="banner-hd1">beard</span>
              <span className="banner-hd2">cut</span>
              <br />
              <button className="btn btn-booknow">BOOK NOW</button>
              <p>
                A short beard cut is a style of facial hari grooming where the
                beard is trimmed to a relatively short length, typically ranging
                from stubble to a few centimeters in length. Short beard styles
                are characterized by neatly trimmed, well-defined lines and
                minimal facial hair growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
