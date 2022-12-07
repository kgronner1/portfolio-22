import React from 'react'
import './portfolio.css'

const portfolioItemList = (props) => {

    const portfolioData = [
      {"id":1, "title":"30-Day Challenge", "video":require("../../assets/videos/welcome.mp4"), "img":require("../../assets/videos/welcome.png"), "shortText": "Software learning program built with IE6 compliant CSS and JS.", "text":"In-software webapp built with HTML, CSS, JS. Software learning program used by new clients, trial users, and even as part of university curriculums. 45+ lessons that interfaced directly with the software to confirm completion or failure."},
      {"id":2, "title":"Video Library", "video":require("../../assets/videos/videos.mp4"), "img":require("../../assets/videos/videos.png"), "shortText": "Video library built with CSS, JS, PHP, MySQL.", "text":"Webapp built with HTML, CSS, JS, PHP, MySQL. Organized 500+ videos into 13+ categories and an adjusting number of subcategories. Weighted Javascript search based on titles then descriptions. Single state page that adjusted content without reload."},
      {"id":3, "title":"Land F/X Mobile App", "video":require("../../assets/videos/app.mp4"), "img":require("../../assets/videos/app.png"), "shortText": "Co-authored mobile app built with Xamarin Forms in C#",  "text":"Mobile App built with Xamarin Forms in C#, XAML, PHP, MySQL. Allows account creation. Displays learning video library, upcoming events, and news to clients."},
      {"id":4, "title":"Land F/X Purchase", "video":require("../../assets/videos/products.mp4"), "img":require("../../assets/videos/products.png"), "shortText": "Purchasing page built with CSS, JS, PHP, MySQL.", "text":"Web application built with HTML, CSS, JS, PHP, MySQL. A purchase page that connects to PayPal's Payflow purchasing API. Simple and clean design. Manages, sanitizes, and updates data in company administration system. Custom control for admins."},
      {"id":5, "title":"Flight Event", "video":require("../../assets/videos/space.mp4"), "img":require("../../assets/videos/space.png"), "shortText": "Webpage built with HTML, CSS, JS, PHP.", "text":"Webpage built with HTML, CSS, JS, PHP. Invitation page to join a tradeshow event at the San Diego Air and Space Museum."},
      //{"id":6, "title":"Black Friday Sale", "video":require("../../assets/videos/black-friday.mp4"), "img":require("../../assets/videos/black-friday.png"), "text":"Webpage built with PHP, HTML, CSS, JS. Wild, wacky, and eye-catching design to show off sale discounts and rules."}   
    ]

    function selectedItem(id){
        console.log("run");
    }

    portfolioData.map(({id, title, shortText}) => {
        return(
        <div key={id} className="portfolioItemText">
        <p>
            <span className="fakeH2 underlineText">{title}</span>
            &mdash; {shortText}
        </p>
        </div> 
        )
    })

}

export default portfolioItemList