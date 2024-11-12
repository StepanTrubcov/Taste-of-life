import React, { useState } from 'react';
import './CalorieCalculator.css';
import Navbar from '../Navbar/NavbarConteiner'

const CalorieCalculator = (props) => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('1.2');
    const [calories, setCalories] = useState(null);

    const handleCalculate = () => {
        if (age && weight && height) {
            const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Формула Mifflin-St Jeor для мужчин
            const totalCalories = bmr * activityLevel;
            setCalories(Math.round(totalCalories));
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    };

    return (<div>
        <div className='calculator' >Калькулятор калорий</div>
        <Navbar/>
    <div className='div'>
        <div className="calorie-calculator">
            <h1>Калькулятор калорий</h1>
            <div>
                <label>Возраст (лет):</label>
                <input className='input' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Вес (кг):</label>
                <input className='input' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Рост (см):</label>
                <input className='input' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Уровень активности:</label>
                <select className='input' value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option value="1.2">Сидячий образ жизни</option>
                    <option value="1.375">Небольшая активность</option>
                    <option value="1.55">Умеренная активность</option>
                    <option value="1.725">Высокая активность</option>
                    <option value="1.9">Очень высокая активность</option>
                </select>
            </div>
            <button onClick={handleCalculate}>Рассчитать</button>
            {calories && <h2>Ваша суточная норма калорий: {calories} ккал</h2>}
            </div>
            <div className='information' >
            {props.calculator.text}
            </div>
        </div>
        </div>
    );
};

export default CalorieCalculator;