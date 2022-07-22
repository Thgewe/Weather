import './App.css';
import { useState } from 'react';
import { TempScaleContext } from './context';
import MainPage from './Pages/MainPage';
<<<<<<< HEAD
function App() {

=======

function App() {
>>>>>>> mobx
    const [isCelsius, setIsCelsius] = useState(
        localStorage.getItem('tempScale') !== null 
            ? localStorage.getItem('tempScale') === 'celsius'
            : true
    );

    return (
        <TempScaleContext.Provider value={{
            isCelsius,
            setIsCelsius
        }}>
            <div className="App">
                <div className="App__wrapper">
                    <MainPage />
                </div>
            </div>
        </TempScaleContext.Provider>
    );
}

export default App;
