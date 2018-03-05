import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/Main';
import ImageSection from './components/Image';
import grace from './assets/images/grace.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header title="Grace Hopper"/>
        <div className="row">
          <div className="col-8">
            <MainSection description="Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992) was an American computer scientist</a> an United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today."/>
            <MainSection description2="Hopper had attempted to enlist in the Navy during World War II, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language."/>
            <MainSection description3="Hopper had attempted to enlist in the Navy during World War II, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language."/>
          </div>
          <div className="col-4">
            <ImageSection pic={grace}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
