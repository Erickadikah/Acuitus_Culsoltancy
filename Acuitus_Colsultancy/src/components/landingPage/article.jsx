import React from 'react';
import "../../assets/styles/landingPage/article.scss";
import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import { BsFillBuildingsFill } from 'react-icons/bs';

export default function Article () {
  return (
    <div className='article'>
    <div className='cover'>
    <div className='art-1'>
    <h1 style={{
        color: "black",
    }}>Get to know about <span
    style={{
        color: `rgb(0, 208, 132)`,
    }}
    >
    our 
    <br />
    company</span></h1>
    <p className='text'>
    Intelli-Wealth Limited is an Agribusiness Consultancy Company established in 2016 to provide advisory services to the agricultural sector in Africa.
    Our mission is to transform the agricultural sector into a profitable venture through capacity building of small-holder farmers and related Micro,
    </p>
    <br />
    <p className='text'>
    Promotes sustainable livelihood by training and educating communities to achieve lasting solutions to poverty and diseases
    We partner with other organizations to make this dream possible    </p>
    <button className='btn-t' style={{
        marginTop: '0.9rem',
        background: `rgb(0,208,132)`,
        fontSize: '16px',
        fontWeight: 'bold',
        // borderRadius: '50px'
    }}>
    Read MOre
    </button>
    </div>
    </div>
    </div>
  );
}

