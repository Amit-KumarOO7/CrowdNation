import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../etherum/factory';

class CampaignIndex extends Component{
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        
        //return { campaigns: campaigns };
        return { campaigns };
    }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>
    }

    
    //minimum amount of jsx
    render() {
        return <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            { this.renderCampaigns() }
            <Button content="Create Campaign"
            icon="add circle"
            primary />
        </div>;
    }
}

export default CampaignIndex; 
