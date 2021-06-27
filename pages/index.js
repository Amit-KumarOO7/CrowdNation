import React, { Component } from 'react';
import factory from '../etherum/factory';

class CampaignIndex extends Component{
    async componentDidMount() {
       const campaigns = await factory.methods.getDepolyedCampaigns().call();


       console.log(campaigns);
    }
    //minimum amount of jsx
    render() {
        return <div>
            Campaign Index!
        </div>;
    }
}

export default CampaignIndex; 
