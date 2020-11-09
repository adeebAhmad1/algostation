import React, { Component, createContext } from "react";
import { db } from "../config/Firebase";
export const DataContext = createContext();
class DataContextProvider extends Component {
  state = {
    performance: [],
    performanceLoaded: false,
    pageLoaded: false,
    allLoaded: false
  };
  getData = (type,typeLoaded)=>{
    db.collection(type).onSnapshot( snapShot=>{
      const array = [];
      snapShot.forEach(doc=>{
        const data = doc.data();
        data.id = doc.id;
        array.push(data);
      });
      this.setState({[type]: array,[typeLoaded]: true});
    });
  };
  componentDidMount(){
    this.getData("performance","performanceLoaded");
    window.addEventListener("load", () => this.setState({pageLoaded: true}));
  };
  componentWillUpdate(prevProps, prevState){
    const { performanceLoaded , pageLoaded, allLoaded } = prevState;
    if(performanceLoaded && pageLoaded && !allLoaded){
      console.log(this.state.performance);
      setTimeout(() => this.setState({allLoaded: true}), 100);
    };
  };
  nameToUrl=(name)=> name.split(' ').join('_').toLowerCase();
  render() {
    return (
      <DataContext.Provider value={{...this.state,nameToUrl: this.nameToUrl}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
