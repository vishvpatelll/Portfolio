import React from 'react';
import './Education.css';
const Education = () => {
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Institute/School</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Persuing BE in Computer Engineering</td>
                    <td>Aditya Silver Oak Institute of Technology</td>
                    <td>2020 - Present</td>
                </tr>
                <tr>
                    <td>Diploma in Computer Engineering</td>
                    <td>Alpha College of Engineering and Technology</td>
                    <td>2017 - 2020</td>
                </tr>
                <tr>
                    <td>10<sup>th</sup> Board</td>
                    <td>Geeta School</td>
                    <td>2017</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Education
