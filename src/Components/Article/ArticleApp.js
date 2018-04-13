import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="article">
        <h2>Article title</h2>
        <p>Article text ...</p>
        <div>
          <button>показать Окно</button>
        </div>
      </div>
    );
  }
}

export default Article;
