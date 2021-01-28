import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"




class NavbarCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
    }
  }

  handleChange = e => {
    this.props.search(e.target.value)
  }



  render() {
    return (
      <Navbar
     
      className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">UCI WORLD TOUR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/my-favorites' data-testid="toFavorites">My Favorites</Nav.Link>
          </Nav>
          <Form inline onSubmit={this.handleSubmit}>
            <FormControl type="text" placeholder="Search"
              onChange={this.handleChange}
              className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   // console.log(state.teamReducer)
// }

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch({ type: 'SEARCH', payload: {query} })
  }
}

export default connect(null, mapDispatchToProps)(NavbarCom) 