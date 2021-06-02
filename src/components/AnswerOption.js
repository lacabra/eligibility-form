import React, {useState} from "react";
import PropTypes from 'prop-types';

function AnswerOption(props) {

  const [answer, setAnswer] = useState(null);

  function onValueChange(event) {
    setAnswer(event.target.value);
    props.onAnswerSelected(event);
  }

  return (
    <li className="answerOption">
      <label className="radioCustomLabel" htmlFor={props.answerContent}>
      <input
        id={props.answerContent}
        type="radio"
        className="radioCustomButton"
        checked={answer === props.answer}
        value={props.answer}
        onChange={onValueChange}
      />
      <span className="optionContent"> {props.answerContent} </span>
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;