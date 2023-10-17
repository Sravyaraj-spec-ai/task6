import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-card">
                    <h3>GSM Based Fire Alarm System </h3>
                    <p>The purpose of this project is to assist building owners in overcoming the issue of 
fire spreading when the owner is not present in the structure. The usage of IR flame sensor on the system ensures that 
the system can detect fire through their IR photodiode. The system built is cheap in 
value and easy to apply to 
houses. This device can be applied in varied areas due to its flexibility and 
simplicity in handling; for instance, in houses, hostels, offices and many more 
places. Users can simply apply the system in fire prone areas, whenever there is a 
fire, the system will instantly alert the users by calling and sending the SMS to 
notify them of the fire via GSM and reduce the fire spreading using water pump. </p>
                </div ><div className="project-card">
                <h3>Image Classification Using Keras CNN with Deep Learning</h3>
                <p>In this project I used deep learning techniques to tackle the classic challenge of cat vs. dog image classification. Leveraging Convolutional Neural Networds (CNNs) and data augmentation, we construct a robust model for accurate classification. Through comprehensive experimentation and optimization. The project's significance lies in its potential applications across various domains.</p>
                </div><div className="project-card">
                    <h3>Deploying an E-Commerce website on to cloud</h3>
                    <p>Cloud hosted an e-commerce website using Amazon Web Service. Amazon S3 (Simple Storage Service) is a service offered by AWS for object storage through a web service interface. Cloud hosting is more scalable, flexible, and stable than web hosting, as it can adjust to the traffic and resource needs of your website any downtime or server restart.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
