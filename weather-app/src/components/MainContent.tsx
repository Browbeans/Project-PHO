import React, { CSSProperties } from 'react'; 
import ContentItem from './ContentItem';
import BarItem from './BarItem'

const sohoBar = "https://fantasydining.com/wp-content/uploads/2016/06/soho-beer-house-andral%C3%A5ng.jpg"
const cafePublik = "https://s3.eu-west-1.amazonaws.com/vinbanken.se/wp-content/uploads/2015/11/goteborgs-basta-barer.jpg"
const hopsBar = "https://www.hopsbar.se/wp-content/uploads/2020/09/hopsbar-1024x560.jpg"
const brewhouseBar = "https://eatie.imgix.net/hy8MLm2Ho9F9Yo6sg/jerntorgets-brygghus-olivedal-JAWZjHDMJ4smoSXvY.jpg?type=picture&fit=crop&crop=edges&w=800"

const sohotTitle = 'Soho-bar'
const cafePublikTitle = 'Cafe Publik'
const hopsTitle = 'Hops'
const brewhouseTitle = 'Brygghuset'



function MainContent() {
    return(
        <div style={rootStyle}>
            <BarItem image={sohoBar} title={sohotTitle}/>
            <BarItem image={cafePublik} title={cafePublikTitle}/>
            <BarItem image={hopsBar} title={hopsTitle}/>
            <BarItem image={brewhouseBar} title={brewhouseTitle}/>   
        </div>
    )
}

const rootStyle: CSSProperties ={
    height: '93vh', 
    width: '100%',
    background: '#f3cf7a',
    display: 'flex', 
    justifyContent: 'space-around', 
    flexWrap: 'wrap', 
    alignItems: 'center'
}


export default MainContent; 