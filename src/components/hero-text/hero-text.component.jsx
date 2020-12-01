import React, { Component } from "react";
import { Carousel } from 'antd';

import img_01 from './../../assets/img_01.jpg'
import img_02 from './../../assets/sunset-5383040_1280.webp'
import img_03 from './../../assets/college-5757815_1280.webp'
import img_04 from './../../assets/paris-5245585_1280.jpg'

const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
};

class HeroText extends Component {
  render() {
    return (
      <div className="container text-center" data-testid={'welcome-message'}>
        <p className="h5 mt-5">
          Welcome to MyHome Web Application
          <br />
          This Application helps people manage their apartments
          <br />
          <a href="signin">Login</a> to continue
        </p>

        <Carousel autoplay>
          <div>
            <div style={contentStyle}>
              <img style={{ width: '100%' }} src={img_01} alt="" />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img style={{ width: '100%' }} src={img_02} alt="" />
            </div>
          </div>
          <div>
           <div style={contentStyle}>
              <img style={{ width: '100%' }} src={img_03} alt="" />
            </div>
          </div>
          <div>
           <div style={contentStyle}>
              <img style={{ width: '100%' }} src={img_04} alt="" />
            </div>
          </div>
        </Carousel>

      </div>
    );
  }
}

export default HeroText;
