import { Route, Routes } from 'react-router-dom';
import { App } from '../App';

import { EvaluationSolution } from '../pages';

export const RoutesTree = () => (
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/solution' element={<EvaluationSolution/>} />
    </Routes>
)