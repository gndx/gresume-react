import React, { Component } from 'react';
import About from './components/About';
import Social from './components/Social';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://gndx.co/wp-content/uploads/2017/05/oscar_barajas.jpg',
      name: 'Oscar Barajas',
      profession: 'FrontEnd Developer',
      bio: '❤ Front end Developer - Growth Hacker at @CityDrive, CSS Lover, Geek & Blogger. Better known as The Grumpy Developer.',
      address: 'Guadalajara, Jalisco México.',
      social: [
        {name: 'facebook', url: 'http://url'},
        {name: 'twitter', url: 'http://url2'}
      ],
      experience: [
        {jobTitle: 'FrontEnd', company: 'CityDrive', startDate: 'Jan 2016', endDate: 'Present', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Backend', company: 'DragonsDev', startDate: 'September 2014', endDate: 'Jan 2016', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      education: [
        {degree: 'Maestria Atomica', institution: 'MIT', startDate: 'Jan 2016', endDate: 'Jan 2017', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {degree: 'Ingenieria Atomica', institution: 'Harvard', startDate: 'Jan 2014', endDate: 'Decenber 2015', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address} />
            <Social social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
