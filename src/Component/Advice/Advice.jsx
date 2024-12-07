import React from "react";
import c from './Advice.module.css'
import Navbar from "../Navbar/NavbarConteiner";

const Advice = () =>{
    return <div>
        <Navbar/>
        <div className={c.name} >Советы по питанию</div>
        <div>1. Включайте больше овощей и фруктов
Старайтесь добавлять к каждому приему пищи порцию овощей или фруктов. Они богаты витаминами, минералами и клетчаткой.
2. Выбирайте цельнозерновые продукты
Цельнозерновые продукты, такие как коричневый рис, киноа и овсянка, содержат больше питательных веществ и клетчатки по сравнению с рафинированными.
3. Увлажнение — ключ к здоровью
Пейте достаточно воды в течение дня. Старайтесь выпивать не менее 8 стаканов воды, чтобы поддерживать оптимальный уровень гидратации.
4. Ограничьте потребление сахара и соли
Старайтесь уменьшить количество добавленного сахара и соли в вашем рационе. Используйте специи и травы для улучшения вкуса блюд.
5. Правильные порции
Обратите внимание на размеры порций. Используйте меньшие тарелки, чтобы контролировать количество пищи и избегать переедания.
6. Планируйте свои приемы пищи
Заранее планируйте свое меню на неделю. Это поможет вам избежать спонтанных решений и обеспечит разнообразие в рационе.</div>
        <div></div>
    </div>
}

export default Advice