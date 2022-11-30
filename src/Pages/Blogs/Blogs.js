import React from 'react';
import useEffect from 'react'
import useTitle from '../../Hook/Title/useTitle';

const Blogs = () => {
    useTitle('blog')

const blogs = [
    {
        
        "blog_id": "01",
        "title": "What it is the different the ways to manage  a state in a React application?",
        "description": "In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.01.URL 02.Web Storage 03.Local State 04.Lifted State 05.Derived State etc"
       
    },
    {
        
        "blog_id": "02",
        "title": "How does prototypical inheritance work?",
        "description":"In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.[[Prototype]] In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.The property [[Prototype]] is internal and hidden, but there are many ways to set it."
       
    },
    {
        
        "service_id": "03",
        "title": "What is the unit test ? Why we write unit test",
        "description":"Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated."
       
    },
    {
        
        "service_id": "04",
        "title": "React vs Angular vs Vue",
        "description":
"React, Many front-end applications rely on global state management to store information,such as who is logged in and other user settings. The most popular project for JavaScript state management is Redux. Most developers use the official React bindings for Redux, which are maintained by the Redux team.Because of React’s popularity, finding input components and ready-to-use elements is extremely easy. They’re all just a Google or GitHub search away.The React ecosystem also includes React Native that allows you to build native iOS and Android applications from a single codebase written in React. So, React can be a great choice for building mobile applications using web technologies,too.React is part of the MERN stack, which contains MongoDB, ExpressJS, React, and NodeJS. The great thing about this combination is that a single language — JavaScript — powers the whole application"
       }
   ]


    return (
        <div className='max-w-5xl mx-auto grid grid-cols-1 gap-6 py-20'>

       {
            blogs.map((blog,i) => <div
            key={i}
            className="mockup-window border bg-base-300">
            <div className=" px-4 py-16 bg-base-200">
            <h2 className='text-5xl text-center text-semibold mb-10'>{blog.title}
            </h2>
            <p>
            {blog.description}
            </p>
               
            </div>
            </div>)
       }

            
        </div>
    );
};

export default Blogs;