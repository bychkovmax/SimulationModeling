import {useState} from "react";

const checkList = [
    {
        "name": "Meat",
        "img": "https://www.clipartmax.com/png/full/20-202561_steak-clipart-clipart-kid-t-bone-steak-clipart.png",
        "rus": "Мясо"
    },
    {
        "name": "Gruntovka",
        "img": "https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-504.png",
        "rus": "Овощи"
    },
    {
        "name": "Glue",
        "img": "https://adonius.club/uploads/posts/2022-02/1643743313_44-adonius-club-p-butilka-vodi-na-prozrachnom-fone-47.png",
        "rus": "Вода"
    },
    {
        "name": "Paint",
        "img": "https://kartinkin.net/uploads/posts/2022-03/1646927400_60-kartinkin-net-p-kartinki-kartoshki-fri-65.png",
        "rus": "Картофель"
    },
    {
        "name": "Wallpaper",
        "img": "https://adonius.club/uploads/posts/2022-02/thumbs/1643962018_24-adonius-club-p-konfeta-na-belom-fone-28.png",
        "rus": "Конфеты"
    },
    {
        "name": "Tile",
        "img": "https://pngimg.com/uploads/spaghetti/spaghetti_PNG97.png",
        "rus": "Макароны"
    }
];
export function MaterialGrid(props) {
    
    return checkList.map((item, index) => (
            <li className=" overflow-hidden shadow-inner drop-shadow-sm rounded-lg text-center">
                <input type="checkbox" value={item} id={index} onChange={event => props.pick_item(event,item.rus)} className="card hidden peer" required=""/>
                <label htmlFor={index} style={{borderWidth:3}}
                       className="card inline-flex mx-auto justify-center items-center p-5 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block2">
                        <img src={item.img} style={{width: 165, height: 165}}/>
                        <div style={{color: "whitesmoke"}} className="w-full text-lg font-semibold">{item.rus}</div>
                    </div>
                </label>
            </li>
        ))
}