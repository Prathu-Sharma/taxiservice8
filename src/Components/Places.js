import React from 'react'
import Card from './Card'
import Button from './Button';
import './Places.css';

const Places = () =>{
 return(
  <div>
    <div className='Heading8'>Places To Visit</div>
    <div className='Container1'>
     <Card className="box1"  imagess="https://indiathrills.com/wp-content/uploads/2021/07/2017-11-21-768x431.jpg" city="Rishikesh" item1="Neer Waterfall" item2="Laxman Jhula" item3="Ram Jhula" item4="Janki Setu"/>
     <Card  className="box1"imagess="https://www.jagranimages.com/images/newimg/12112022/12_11_2022-dehradun_top_news_23199140.webp" city="Dehradun" item1="FRI" item2="Tapkeshwar Mahadev" item3="Buddha Temple" item4="Robbers Cave"/>
     <Card  className="box1" imagess="https://lp-cms-production.imgix.net/2019-06/GettyImages-450780651_full.jpg" city="Mussoorie" item1="Shiv Mandir" item2="Library Chowk" item3="Campty Waterfall" item4="Company Garden"/>    
   </div>
   <div className='buttonContainer'>
   <Button names="Book now"/>

   </div>
   </div> )
   }
   export default Places;
 