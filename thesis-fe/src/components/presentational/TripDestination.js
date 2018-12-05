import React, { Component } from 'react';
import styled from 'react-emotion';
import next from '../../assets/next.png'
import map from '../../assets/map.png'
import location from '../../assets/location_white.png'


const Container = styled('div')`
box-sizing: border-box;
font-size: 1.25rem;
border-radius: 10px;
width: 90vw;
height: 20vh;
display: flex;
flex-direction:row;
justify-content: space-between;
padding-left: 2rem;
// background: rgba(247,146,98,0.9);
background: rgba(247,152,98,1);
margin-bottom: 2vh;
align-items: center;
`;

const ContainerDestination = styled('h1')`
font-size: 1.5rem;
margin-left:.25rem;
color: white;
max-width: 20rem;
align-content: flex-end;
`;

const MoreInfoButton = styled('button')`
  margin-right: .25rem;
  position: relative;
  font-size: 2rem;
`;


class TripDestination extends Component {


  render() {
    console.log(this.props);
    return (
      <Container>
        <img src={location} alt="logo" height="35" width="35"/>
        {
          (this.props.info.isDictated || this.props.info.isLocked) ?
            <ContainerDestination>
              Destination: {this.props.info.chosenSuggestion.name}
            </ContainerDestination>
          :
            <ContainerDestination>
              Destination : {(this.props.info.chosenDestination) ? this.props.info.chosenDestination.name : <span>Not yet decided</span>}
            </ContainerDestination>
        }
        <MoreInfoButton>
          <img src={next} alt="more info" height="30" width="30" onClick={this.props.redirectParent}/>
        </MoreInfoButton>
      </Container>
    );
  }
}

export default TripDestination;