/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React from 'react';
import { components } from '../components';
import { handlers } from '../handlers';

/* 
* Based on defined configuration build the component tree
*/
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
* Build the raw component and set the corresponding props: static, handlers, 
* and the ones which should be taken from state
*/
const buildComponent = item => {
  const Component = components[item.type];
  const handlers = mapPropsToHandlers(item.handlers);

  return <Component
    key={item.key} // unique kwy
    {...item.staticProps} // static props
    {...handlers} // event handlers ex: onChange, onBlur etc
    propsFromState = {item.propsFromState} // the props that need to be mapped from state
  />
};

/*
* Based on handlers that have been defined in the config object return the corresponding functions
* with correct context binding
*/
const mapPropsToHandlers = (rawHandlers) => {
  if (!rawHandlers || rawHandlers.constructor !== Array) return {};
  return rawHandlers.reduce((result, handler) => {
    if (!handlers[handler.event]) return {};
    result[[handler.event]] = handlers[handler.event];
    return result;
  }, {})
};

const buildReducer = (reducerRegistry, item) => {
  reducerRegistry.register("dataReducer", item.id, item.initialState);
};

