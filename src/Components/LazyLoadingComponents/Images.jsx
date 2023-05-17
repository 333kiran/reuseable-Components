import React from 'react';

const Images = () => {
    const Image1 = "https://th.bing.com/th/id/OIP.fSkdhtpK1Bi98HTV_hGMBgHaEK?pid=ImgDet&rs=1";
    const Image2 = "https://vippassgroup.com.ec/wp-content/uploads/2020/12/puntos-inbursa-74.jpg";
    const Image3 = "https://es.fxmag.com/images/articles/como-mejoramos-la-relacion-entre-el-promotor-y-el-inversor-a-traves-de-un-saas-digital.jpg";
    const Image4 = "https://i.pinimg.com/originals/34/ad/e8/34ade8e87d1b0c485d2e63619513facd.jpg";
    const Image5 = "https://yt3.ggpht.com/a/AATXAJzEZQrSic_rineUEdmVS7cf7bDRjpXdPZN1Iw=s900-c-k-c0xffffffff-no-rj-mo";
    const Image6 = "https://www.linearmagnetics.com/wp-content/uploads/2018/12/Productive-Web-Organization-Suggestions-internet-business-promoter-review-680x380.jpg";
    const Image7 = "https://th.bing.com/th/id/OIP.gWc_H0KsAhNqTizsZfjvrAHaE8?pid=ImgDet&rs=1";
    const Image8 = "https://th.bing.com/th/id/OIP.O9cLhzYQwucbx1FYpuPBRQHaE8?pid=ImgDet&rs=1";
    const Image9 = "https://www.vecosys.com/wp-content/uploads/2017/08/dreamstime_m_14865705.jpg";
    const Image10 = "https://th.bing.com/th/id/OIP.O40iSPOwoxngN70DYSzs7wHaEK?pid=ImgDet&rs=1";
  return (
    <div className='gallery'>
      <img src={Image1} className="img" alt="firstImage" height="300px" />
      <img src={Image2} className="img" alt="secondImage" width="850px" height="370px"/>
      <img src={Image10} className="img" alt="thirdImage" width="450px"/>
      <img src={Image3} className="img" alt="forthImage" width="1500px" height="300px"/>
      <img src={Image4} className="img" alt="fifthImage" />
      <img src={Image5} className="img" alt="sixthImage" width="790px" height="490px"/>
      <img src={Image9} className="img" alt="seventhImage" width="1500px" height="400px"/>
      <img src={Image6} className="img" alt="eighthImage" width="830px" height="300px"/>
      <img src={Image7} className="img" alt="ninthImage"/>
      <img src={Image8} className="img" alt="tenthImage" width="1500px" height="300px" />
      <img src={Image5} className="img" alt="sixthImage" width="790px" height="490px"/>
      <img src={Image9} className="img" alt="seventhImage" width="1500px" height="400px"/>
      <img src={Image6} className="img" alt="eighthImage" width="830px" height="300px"/>
      <img src={Image7} className="img" alt="ninthImage"/>
      <img src={Image8} className="img" alt="tenthImage" width="1500px" height="300px" />
    </div>
  )
}

export default Images;
