/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React from 'react';
import { components } from '../components';

/* Based on defined configuration build the component tree */
export function build(reducerRegistry, config) {
  if (!(config && config.components && Object.prototype.toString.call( config.components ) === '[object Array]'))
    return (<div/>);

  let children;
  children = config.components.map((item) => {
    if (!components[item.type]) return (<div />);

    buildReducer(reducerRegistry, item);
    return buildComponent(item);
  });

  return children;
}

/*
* Receiving a component build it and mapStateToProps and mapDispatchToProps if necessary
*/
const buildComponent = item => {
  const component = components[item.type];
  return buildRawComponent(component, item);
};

const buildRawComponent = (Component, item) => {
  return <Component
    key={item.key}
    {...item.staticProps}
    propsFromState = {item.propsFromState}
  />
};

const buildReducer = (reducerRegistry, item) => {
  reducerRegistry.register("dataReducer", item.id, item.initialState);
};

