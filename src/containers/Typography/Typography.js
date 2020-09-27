import React from 'react';

const Typography = props => (
  <React.Fragment>
    <h2 className="text--display-4">Display 4</h2>
    <h2 className="text--display-3">Display 3</h2>
    <h2 className="text--display-2">Display 2</h2>
    <h2 className="text--display-1">Display 1</h2>
    <h1 className="text--headline">Headline</h1>
    <h2 className="text--title">Title</h2>
    <h3 className="text--subhead">Subtitle</h3>
    <h4 className="text--menu">Menu</h4>
    <span className="text--button">Button</span>
    <p>Body</p>
    <p className="text--caption">Caption</p>
    <code className="text--code">Code</code>
  </React.Fragment>
);

export default Typography;