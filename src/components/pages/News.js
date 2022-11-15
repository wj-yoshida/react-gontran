import React from 'react';
import * as contentful from 'contentful';

class News extends React.Component{

  client = contentful.createClient({
    space: "7mp6ca7ra6f0",
    accessToken: "83FRAKYBlcczHXvv9NXzFiPCh1pQuxyXrY3Qy52Nilg"
  });

  state = {
    items: []
  }

  componentDidMount = () => {
    this.client.getEntries()
    .then((response) => {
      this.setState({
        items: response.items
      });
    });
  }

  render(){
    return (
      <div>
        {
          this.state.items.map((item) => (
            <li>{item.fields.title}</li>
           ))
        }
      </div>
    );  
  }
}


export default News;