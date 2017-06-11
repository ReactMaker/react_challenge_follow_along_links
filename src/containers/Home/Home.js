import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {
  state = {
    width: null,
    height: null,
    transform: null,
  }

  handleMouseEnter = (e) => {
    const linkCoords = e.target.getBoundingClientRect();

    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.pageYOffset,
      left: linkCoords.left + window.pageXOffset,
    };

    this.setState({
      width: coords.width,
      height: coords.height,
      transform: `translate(${coords.left}px, ${coords.top}px)`
    });
  }

  render() {
    const { width, height, transform } = this.state;

    const self = this;
    const link = text => <a href="" onMouseEnter={self.handleMouseEnter}>{text}</a>;

    return (
      <div id="pageHome">
        <span className="highlight" style={{ width, height, transform }}/>
        <nav>
          <ul className="menu">
            <li>{link('Home')}</li>
            <li>{link('Order Status')}</li>
            <li>{link('Tweets')}</li>
            <li>{link('Read Our History')}</li>
            <li>{link('Contact Us')}</li>
          </ul>
        </nav>

        <div className="wrapper">
          <p>Lorem ipsum dolor sit amet, {link('consectetur')} adipisicing elit. Est {link('explicabo')} unde natus necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!</p>
          <p>Aspernatur sapiente quae sint {link('soluta')} modi, atque praesentium laborum pariatur earum {link('quaerat')} cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.</p>
          <p>Cum ipsam quod, incidunt sit ex {link('tempore')} placeat maxime {link('corrupti')} possimus {link('veritatis')} ipsum fugit recusandae est doloremque? Hic, {link('quibusdam')}, nulla.</p>
          <p>Esse quibusdam, ad, ducimus cupiditate {link('nulla')}, quae magni odit {link('totam')} ut consequatur eveniet sunt quam provident sapiente dicta neque quod.</p>
          <p>Aliquam {link('dicta')} sequi culpa fugiat{link('Home')} {link('consequuntur')} pariatur optio ad minima, maxime {link('odio')}, distinctio magni impedit tempore enim repellendus {link('repudiandae')} quas!</p>
        </div>
      </div>
    );
  }
}
