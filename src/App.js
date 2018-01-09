import React, { Component } from 'react';
import { connect } from 'react-redux'
import { translate } from 'react-i18next';
import { withCookies } from 'react-cookie';
import './App.css';
import { build } from './utils/componentBuilder';

const config = {
    "page": {
        "pageTitle": "Hello page",
        "accessibility": {
            "privateRoute": false, // check if a page is private or not
            "criteria": [] // if a page is private check the criteria before rendering, ex:is user is logged in
        }
    },
    "components": [{
            "id": "test1",
            "key": "uniqueKey1",
            "type": "Image",
            "staticProps": {
                "altText": "alt text of the image",
                "fallBackSrc": "http://labs.google.com/ridefinder/images/mm_20_blue.png",
                "primaryImageSrc": "http://labs.google.com/ridefinder/images/mm_20_blue.png"
            },
            "initialState": {},
            "validators": [],
            "handlers": []
        },
        {
            "id": "test2",
            "key": "uniqueKey2",
            "type": "TextField",
            // bind directly on component
            "staticProps": {
                "autoFocus": true,
                "className": "inputField",
                "floatingLabelText": "Demo Purpose",
                "hintText": "Demo Purpose",
                "id": "textField1"
            },
            "propsFromState": {
                "dataReducer": [{
                    componentName: 'test2',
                    propName: "tesT",
                    mappingName: "value"
                }]
            },
            // props that will go in reducer
            "initialState": {
                "value": "test",
                "error": ""
            },
            "handlers": [{
                // for input type text, when change event is trigger, validate the data based on following criteria
                event: 'onChange',
                validators: [{
                        type: 'email',
                        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    },
                    {
                        type: 'noSpecialCharacters',
                        regex: /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g
                    }
                ],
                actions: [{
                        // the container where the action belongs
                        type: 'interactionActions',
                        // action to be executed if validations went well
                        name: 'attachValueToComponentState'
                    }, {
                        type: 'dataReducer',
                        name: 'validateDataOnServer'
                    },
                    {
                        // this action will be performed on whatever step the validation fails.
                        type: 'errorReducer',
                        name: 'attachErrorToComponentState'
                    }
                ]
            }]
        },
        {
            "id": "test3",
            "key": "uniqueKey3",
            "type": "TextField",
            "staticProps": {
                "autoFocus": false,
                "className": "inputField",
                "floatingLabelText": "Demo Purpose",
                "hintText": "Demo Purpose",
                "id": "textField1"
            },
            "initialState": {
                "value": "test",
                "succedAddedToReducer": true
            },
            "validators": [],
            "handlers": []
        },
        {
            "id": "test4",
            "key": "uniqueKey4",
            "type": "RaisedButton",
            "staticProps": {
                "label": "Submit",
                "style": {
                    "margin": "12"
                }
            },
            "initialState": {},
            "validators": [],
            "handlers": []
        }
    ],
    "rules": []
};


class App extends Component {
    constructor(props) {
        super(props);
    }

    renderChildren() {
        return build(window.reducerRegistry, config);
    }

    render() {
        return ( 
        <div className = "App" >
            <div className = "App-header" >
            <img className = "App-logo"alt = "logo" />
            <h2> Welcome to React </h2> </div> <div className = "App-intro" > { this.renderChildren() } </div> 
        </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        state: state
    }
};

const connectedApp = connect(
    mapStateToProps
)(App);

export default withCookies(translate('translations')(App));