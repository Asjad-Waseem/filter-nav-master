import React, { Component } from 'react';
import './filter.css';
// import Data from './data.json';
import { Container, Row, Col, Dropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline, IoPricetags, IoCalendarOutline } from 'react-icons/io5';
import { BsListTask } from 'react-icons/bs';
import DatePicker from 'sassy-datepicker';
import FilterData from './data.json';

// Setting Contants or Declaring Initial State

const initialState = {
    search: "",
    currentLocationFilter: "Search By City",
    currentPriceFilter: "$-$$$",
    currentCalenderFilter: "8/11/2021",
    currentTypeFilter: "Select Type",
    location: [ { name: "City 1" }, { name: "City 2" }, { name: "City 3" }, { name: "City 4" } ],
    price: [ { name: "Under 10 € (€)" }, { name: "€ 10-50 (€€)" }, { name: "Over € 50 (€€€)" } ],
    type: [ { name: "Parties" }, { name: "Sport Events" }, { name: "Cooperative Events" }, { name: "Job Fairs" }, { name: "Confrences" }, { name: "Museum Expositions" }, { name: "Work Shops" }, ],
    dateVal: "",
    date: "",
    allData: FilterData
}

// Class component is mounted here

class Filter extends Component {

    // This is the contructor

    constructor(){

        // Usage of super method

        super();

        // state and action event bindings

        this.state = initialState;

        this.onChange = this.onChange.bind(this);

    }

    // This is the onChange function that is responsible for all the state value updates using key:value pairs

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    // Date function handling the change in dates

    onDateChange = (date) => {
        this.setState( {search: `${date.getDate().toString()}/${[date.getMonth() + 1].toString()}/${date.getFullYear().toString()}`})
        console.log(this.state.search)    
    };

    // Price function handling the selection and change in prices

    handlePrice = (e) => {
        const { name, checked } = e.target;
        let newPrice = this.state.price.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        this.setState({ search: name })
        this.setState({ currentPriceFilter: name })
        this.setState({ price: newPrice })
    }

    // Setting Location Checkbox

    handleLocation = (e) => {
        const { name, checked } = e.target;
        let newLocations = this.state.location.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        this.setState({ search: name })
        this.setState({ currentLocationFilter: name })
        this.setState({ location: newLocations })
    }

    // Location function handling the change in location

    locationChange = (e) => {
        this.state.location.map((v,i) => {
            console.log(v);
            console.log(i);
        })
    }

    // Setting Type Checkbox

    handleType = (e) => {
        const { name, checked } = e.target;
        let newType = this.state.type.map((data) => {
            return (data.name === name ? { ...data, isChecked: checked } : data)
        })
        this.setState({ search: name })
        this.setState({ currentTypeFilter: name })
        this.setState({ type: newType})
    }

    // Render function is a part of the react class based component lifecycle, the render function has the return statement

    render() { 

    // This is the return statement

    return (
        <>
            <Container >

                {/* Main Component */}

                <div className="main-filter-container" >
                    <Row className="main__row justify-content-between">

                        <Col md={2} className="col-drop-down">
                             <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><IoLocationOutline /></span>
                                    Location
                                    <p className="lower-text">{this.state.currentLocationFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {this.state.location.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" onChange={this.handleLocation} name={v.name} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
                                        })}

                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown> 
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><IoPricetags /></span>
                                    Price
                                    <p className="lower-text">{this.state.currentPriceFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {this.state.price.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" name={v.name} onChange={this.handlePrice} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
                                        })}

                                    </ul>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><IoCalendarOutline /></span>
                                        Date
                                    <p className="lower-text">{this.state.currentCalenderFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="drp__dwn__menu">
                                    <DatePicker onChange={this.onDateChange} />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2} className="col-drop-down">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <span className="icon"><BsListTask /></span>
                                        Type
                                    <p className="lower-text">{this.state.currentTypeFilter}</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ul className="checkbox-list">
                                        {this.state.type.map((v, i) => {
                                            return (
                                                <p className="each-checkbox" key={i}>{v.name}
                                                    <div className="check-box-div">
                                                        <input className="check-box" type="checkbox" name={v.name} onChange={this.handleType} checked={v ? v.isChecked : false} />
                                                    </div>
                                                </p>

                                            )
                                        })}

                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col md={2}>
                            <button className="discover-btn">Discover Events</button>
                        </Col>
                    </Row>
                </div>

                {/* Card For Dummy Data */}

                <div>
                    <div className="card__container mt-5">
                    {/* Filtering Data */}
                       
                        {this.state.allData.filter((val) => {
                            if (this.state.search === "") {
                                return val
                            }
                            else if (val.loc.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (val.Type.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (val.date.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                                return val

                            }
                            else if (this.state.search === "Under 10 € (€)" ? val.Price < 10 : this.state.search === "€ 10-50 (€€)" ? val.Price <= 50 && val.Price >= 10 : val.Price > 50) {
                                return val

                            }
                            }).map((data, index) => {
                                return (
                                    <div>
                                        <Card key={index} className="mt-2 mb-2" style={{ width: '18rem', backgroundColor: "black", color: "white" }}>
                                            <Card.Body>
                                                <Card.Title className="main__row">{data.Title}</Card.Title>
                                                <Card.Text>
                                                    <p>Event Type: <span style={{ color: "red", fontWeight: "600", float: "right" }}>{data.Type}</span></p>
                                                    <p>Event Date: <span style={{ color: "Blue", fontWeight: "600", float: "right" }}>{data.date}</span></p>
                                                    <p>Event Price: <span style={{ color: "orange", fontWeight: "600", float: "right" }}>{data.Price}</span></p>
                                                    <p>Event Location: <span style={{ color: "seagreen", fontWeight: "600", float: "right" }}>{data.loc}</span></p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                           }
                        </div>
                    </div>

            </Container>

        </>
    );
  }
}

// The class needs to be exported and imported in the main application file normally labelled or called as "App.js"

export default Filter;