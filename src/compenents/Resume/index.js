import React from 'react';
import pdf from '../../images/resume.pdf'

function Resume() {
    return (

        <div>
            <div class="left"></div>
            <div class="stuff">
                    <h1>Resume</h1>
                    <h2>Hikmet <a href={pdf} download> <i class="fas fa-download"></i></a></h2>
                    <hr />
                        <p class="head">Interests</p>
                        <ul>
                            <li>Soccer</li>
                            <li>Basketball</li>
                            <li>Design</li>
                            <li>Programming</li>
                            <li>Computer Science</li>
                        </ul>
                        <p class="head">Skills</p>
                        <ul>
                            <li>Web Design with HTML & CSS & JavaScript & React </li>
                        </ul>
                        <p class="head">Education</p>
                        <ul>
                            <a href="https://bootcamp.cps.gwu.edu/coding/">
                                <li>George Washington Web Development Bootcamp</li>
                            </a>
                            <li>Codeacademy</li>
                        </ul>
                        <p class="head">Experience</p>
                        <ul>
                            <li>Full Stack Web Developer</li>
                        </ul>
                        <p class="head">Extracurriculars</p>
                        <ul>
                            <li>Chess Club</li>
                            <li>Book Club</li>
                        </ul>
                    </div>
                    <div class="right"></div>
                </div>
                    );
}

                    export default Resume;
