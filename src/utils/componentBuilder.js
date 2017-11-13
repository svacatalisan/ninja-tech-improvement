/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React from 'react';
import { components } from '../components';

/* Based on defined configuration build the component tree */
export function build(config) {
  if (!(config && config.components && Object.prototype.toString.call( config.components ) === '[object Array]'))
    return (<div/>);
  let children;
  children = config.components.map((item) => {
    if (!components[item.type]) return (<div />);
    const RawComponent = buildRawComponent(item);
    const ConnectedComponent = connectComponent(RawComponent, item.connectProps, item.connectActions);
    return ConnectedComponent;
  });

  return children;
}

const buildRawComponent = item => {
  const Component = components[item.type];
  return <Component
    key={item.key}
  />;
};

const connectComponent = (Component, props, actions) => {
  // until all the functionality will be in place
  return Component;
};

export const mapStateToProps = (state, mapableFields) => {};

export const mapDispatchToProps = (state, mapableActions) => {};
