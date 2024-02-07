import Typewriter from "typewriter-effect";
import PropTypes from 'prop-types';

export default function Type({text}) {
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
        delay : 200
      }}
    />
  );
}
Type.propTypes = {
  text: PropTypes.string,
};
