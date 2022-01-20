import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
* A trivial function for converting durations strings 
* into integers of milliseconds.
* "5s" -> 5000
* "500ms" -> 500
*/

const durFromString = s => {
  if (typeof s !== 'string') return 0;
  let num = parseInt(s);
  let txt = "";

  for (let i = 0; i < s.length; i++) if (!(parseInt(s[i]) >= 0)) txt += s[i];

  if (txt === 's') return num * 1000;else if (txt === 'ms' || txt === '') return num;else return 0;
};
/*
* A React Component with two required props: from & to.
* That changes the style, consecutively from "from" object prop, 
* to "to" list prop objects.
*/


const Animate = props => {
  // Initialize the style & duration states. 
  // As their values are used in the animation logic.
  const [style, setStyle] = useState(props.from);
  const [duration, setDuration] = useState(props.durations ? props.durations[0] : '1s'); // Just an additional state to indicate either it's
  // the first rendering of the component or not.

  const [firstRender, setFirstRender] = useState(true); // Changing "style" and "duration" states logic is wrapped here

  const updateStyle = () => {
    // The logic is wrapped here for recursion purpose.
    function update_func() {
      // 1- Initialize durs list variable and dur
      const durs = props.durations ? props.durations.map(dur => durFromString(dur)) : [1000];
      let dur = 0;

      for (let i = 0; i < props.to.length; i++) {
        // If the user entered a convenient list of durations. Invoke the hooks,
        // then increase the dur variable with the i'th value of durs.
        if (props.durations && props.durations.length === props.to.length) {
          setTimeout(() => setStyle(props.to[i]), dur);
          setTimeout(() => setDuration(props.durations[i]), dur);
          dur += durs[i];
        } // Otherwise, invoke the hooks, then increase the dur value wiht the only
        // value in durs list.
        else {
          setTimeout(() => setStyle(props.to[i]), dur);
          dur += durs[0];
        } // For looping purpose


        if (props.loop && i === props.to.length - 1) {
          setTimeout(() => setStyle(props.from), dur);
          setTimeout(update_func, dur + durs[0]);
        }
      }
    } // Execute the above update_func with respect to the "delay" prop


    setTimeout(update_func, props.delay || 100);
  }; // Only executed in the first render


  if (firstRender) {
    setFirstRender(false);
    updateStyle();
  } // JSX


  return /*#__PURE__*/React.createElement("div", {
    style: { ...props.style,
      ...style,
      transition: duration
    }
  }, props.children);
}; // PropTypes of The Animate Component

Animate.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  delay: PropTypes.number,
  durations: PropTypes.arrayOf(PropTypes.string),
  loop: PropTypes.bool
}; // useAnimate Hook

const useAnimate = initProps => {
  // Initialize the initial value of Animate Component using initProps
  const InitialWrapper = rprops => /*#__PURE__*/React.createElement(Animate, {
    from: initProps.from || rprops.from,
    to: initProps.to || rprops.to,
    durations: initProps.durations || rprops.durations,
    style: initProps.style || rprops.style,
    delay: initProps.delay || rprops.delay
  }, rprops.children); // Initialize the state using the InitialWrapper


  const [animate, setAnimate] = useState(() => InitialWrapper); // Initialize the state modifier

  const hookSetter = props => {
    const AnimateWrapper = rprops => /*#__PURE__*/React.createElement(Animate, {
      from: props.from || rprops.from,
      to: props.to || rprops.to,
      durations: props.durations || rprops.durations,
      style: props.style || rprops.style,
      delay: props.delay || rprops.delay
    }, rprops.children);

    setAnimate(() => AnimateWrapper);
  };

  return [animate, hookSetter];
};

const BounceIn = {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: [{
    transform: 'scale(1.2)',
    opacity: 1
  }, {
    transform: 'scale(0.9)'
  }, {
    transform: 'scale(1.05)'
  }, {
    transform: 'scale(0.975)'
  }, {
    transform: 'scale(1)'
  }],
  durations: ['250ms']
};

const BounceOut = {
  from: {
    transform: 'scale(1)'
  },
  to: [{
    transform: 'scale(1.2)'
  }, {
    transform: 'scale(0.8)',
    opacity: 0
  }],
  durations: ['250ms']
};

const FadeIn = {
  from: {
    opacity: 0
  },
  to: [{
    opacity: 1
  }],
  durations: ['1s']
};

const FadeOut = {
  from: {
    opacity: 1
  },
  to: [{
    opacity: 0
  }],
  durations: ['1s']
};

const FancyPopIn = {
  from: {
    transform: 'rotate(20deg) scale(0)'
  },
  to: [{
    transform: 'rotate(-5deg) scale(1)'
  }, {
    transform: 'rotate(0deg)'
  }],
  durations: ['1s']
};

const SlideInDown = {
  from: {
    transform: 'translate(0, 200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};

const SlideOutDown = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, 200%)'
  }],
  durations: ['1s']
};

const SlideInLeft = {
  from: {
    transform: 'translate(200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};

const SlideOutLeft = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(200%, 0)'
  }],
  durations: ['1s']
};

const SlideInRight = {
  from: {
    transform: 'translate(-200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};

const SlideOutRight = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(-200%, 0)'
  }],
  durations: ['1s']
};

const SlideInTop = {
  from: {
    transform: 'translate(0, -200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};

const SlideOutTop = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, -200%)'
  }],
  durations: ['1s']
};

const ZoomIn = {
  from: {
    transform: 'scale(0)'
  },
  to: [{}],
  durations: ['1s']
};

const ZoomOut = {
  from: {},
  to: [{
    transform: 'scale(0)'
  }],
  durations: ['1s']
};

export { Animate, BounceIn, BounceOut, FadeIn, FadeOut, FancyPopIn, SlideInDown, SlideInLeft, SlideInRight, SlideInTop, SlideOutDown, SlideOutLeft, SlideOutRight, SlideOutTop, ZoomIn, ZoomOut, useAnimate };
