import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Hannah Ziegler",
            "title": "Cyberattacks crippled thousands of car dealers. Here's what to know. - The Washington Post",
            "description": "The cyberattacks on CDK Global led to a shutdown of sales, financing and payroll systems for many dealerships in North America.",
            "url": "https://www.washingtonpost.com/business/2024/06/21/car-dealers-cyberattack-cdk-global/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EJVDSOH772RFAR5OWF4TWNNWHE_size-normalized.jpg&w=1440",
            "publishedAt": "2024-06-22T03:15:51Z",
            "content": "Thousands of car dealers are struggling to do business this week because of two cyberattacks on an industry software provider.\r\nThe cyberattacks on CDK Global, which provides software to nearly 15,00… [+453 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "David Ovalle",
            "title": "FDA approves menthol vapes, drawing criticism from health advocates - The Washington Post",
            "description": "The decision arrives as the FDA is criticized for failing to rein in illegal but widely available flavored vaping products that appeal to young people.",
            "url": "https://www.washingtonpost.com/health/2024/06/21/fda-menthol-vapes-ecigarettes/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QC6DNWAMOUI6VACUFCNO63RYUM.jpg&w=1440",
            "publishedAt": "2024-06-22T00:06:22Z",
            "content": "The Food and Drug Administration on Friday approved the first menthol-flavored e-cigarette products, drawing swift criticism from some public health advocates while signaling the agency believes vape… [+5020 chars]"
        }]
        constructor(){
            super()
            this.state={
                articles: this.articles
            }
            console.log("Constructor")
        }
        async componentDidMount(){
           let apiData=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ca6ef85d2a3480c895855cc4c82a91f")
         let response= await apiData.json()
         this.setState({
            articles:response.articles
         })
        }
  render() {
    console.log("render")
    return (
      <div className='container '>
        <h2 className='text-center display-5 m-3'>Top Headlines</h2>
        <div className='row'>
            { this.state.articles.map( (event)=>{
                  return <div className='col-md-4'>
                  <NewsItem title={event.title?event.title.slice(0, 30):"News Update"} description={event.description ? event.description.slice(0, 100): "My description"} image={event.urlToImage? event.urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QC6DNWAMOUI6VACUFCNO63RYUM.jpg&w=1440"}/>
                   
                  </div>
                })
            }
              
            
         
              </div>
        </div>
       
    
    )
  }
}
