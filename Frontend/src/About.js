import React from 'react';

const About = () => {
    return (
        <div className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    About Us
                </h2>    
            </div>
            
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Why?</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque atque amet beatae reprehenderit consectetur dolores quasi cum. Facilis sit ab quae dignissimos neque tenetur voluptate veritatis earum assumenda odio? Ipsam!
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">How?</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus numquam natus iure ullam
                    </p>
                    
                </div>

                <div className="col-1-of-2">
                    <div className="composition">
                        <img alt="idk" src="./img/logo.png" className="composition__photo"/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;