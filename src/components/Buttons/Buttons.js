import useButtons from './useButtons';

import './buttons.styles.scss';

const Buttons = () => {
    const {
        goToNextPageHandler,
        goToPreviousPageHandler
    } = useButtons();

    return (
        <div>
            <button className="next-btn" onClick={goToPreviousPageHandler}>BACK</button>
            <button className="prev-btn" onClick={goToNextPageHandler}>NEXT</button>
        </div>
    )
}

export default Buttons;