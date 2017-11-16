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
* Based on an item
*/
const buildComponent = item => {
  const component = components[item.type];
  const rawComponent = buildRawComponent(component, item);
  return connectComponent(rawComponent, item.connectProps, item.connectActions);
};

const buildRawComponent = (Component, item) => {
  return <Component
    key={item.key}
    {...item.staticProps}
  />
};

const buildReducer = (reducerRegistry, item) => {
  reducerRegistry.register("dataReducer", item.id, item.initialState);
};

const connectComponent = (Component, props, actions) => {
  // until all the functionality will be in place
  return Component;
};

export const mapStateToProps = (state, mapableFields) => {};

export const mapDispatchToProps = (state, mapableActions) => {};
