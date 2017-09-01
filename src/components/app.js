import React from 'react';
import NavigationBar from './navigation-bar';
import './navigation-bar.css'

export default class App extends React.Component{
      constructor(props) {
        super(props);

        this.state = {

          links:  [{
            text: 'Courses',
            href: 'http://www.thinkful.com/courses/'
          }, {
            text: 'Mentorship',
            href: 'http://www.thinkful.com/mentorship/'
          }, {
            text: 'Who We Are',
            href: 'https://www.thinkful.com/about/'
          }, {
            text: 'Best Mentor Evar!',
            href: 'https://www.thinkful.com/mentors/matthew-day/'
          }]
        }
    }

  render() {
    const linkies = this.state.links.map((link, index) =>
      <NavigationBar key={index} {...link}  />
    );

    return(
      <div className="navigation-bar">
          <h1>{this.props.title}</h1>
        <nav className="navigation-bar-nav">
          <ul>{linkies}</ul>
        </nav>
      </div>
    )
    }
}
