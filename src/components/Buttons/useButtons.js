import { useSelector, useDispatch } from 'react-redux';
import { gamesActions } from '../../store/games';

const useButtons = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.games.currentPage);

    const goToNextPageHandler = () => {
        dispatch(gamesActions.nextPage());
      }
    
    const goToPreviousPageHandler = () => {
        if (currentPage > 1) {
          dispatch(gamesActions.prevPage());
        }
    }

    return {
        goToNextPageHandler,
        goToPreviousPageHandler
    }

}

export default useButtons;