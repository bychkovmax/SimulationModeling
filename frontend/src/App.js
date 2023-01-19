import './styles/App.css';
import {useState} from "react";
import {Modal} from "flowbite-react";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import {MaterialGrid} from "./components/MaterialGrid";
import {MaterialChart} from "./components/MaterialChart";
import {getMaterialUsage} from "./components/MaterialUsage";
import {ChartModal} from "./components/ChartModal";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const [listOfMaterials, setListOfMaterials] = useState([]);
    const [checked, setChecked] = useState([]);
    const [maxMaterialCount, setMaxMaterialCount] = useState(0);
    const [materialPerDay, setMaterialPerDay] = useState(0);
    const [days, setDays] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [chartReference, options] = MaterialChart()
    const [chartData, setChartData] = useState({
        labels: Array.from(Array(15).keys()),
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: '#a855f7',
                backgroundColor: '#581c87',
            },
        ],
    });

    const handleCheck = (event, name) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        let updatedListOfSelectedRivals = [...listOfMaterials];
        if (event.target.checked) {
            updatedListOfSelectedRivals = [...listOfMaterials, name];
        } else {
            updatedListOfSelectedRivals.splice(checked.indexOf(name), 1);
        }
        setListOfMaterials(updatedListOfSelectedRivals);
    };
    return (
        <div className="App">
            <h1 className="text2 title mb-5 text-5xl font-bold text-center text-gray-900 dark:text-white">Прогноз запасов еды в бесплатной столовой</h1>
            <form className="m-4 justify-center ">
                <h1 className="text2 mb-5 text-3xl font-bold text-justify text-gray-900 dark:text-white">Выберите
                    продукт для прогноза</h1>
                {/*<Container>*/}
                <ul className=" grid gap-6 w-full md:grid-cols-3">
                    <MaterialGrid pick_item={handleCheck}/>
                </ul>
                <h1 className="text2 mb-5 text-3xl font-bold text-justify text-gray-900 dark:text-white">Укажите
                    необходимые параметры:</h1>
                <label htmlFor="minmax-range"
                       className="text2 block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Количество
                    имеющейся еды на складе: {maxMaterialCount} (шт)</label>
                <input id="minmax-range" type="range" min="0" max="1000" value={maxMaterialCount} onChange={(e) => {
                    setMaxMaterialCount(e.target.value)
                }} className="w-full h-2 bg-gray-200 rounded-lg accent-green-400 dark:bg-gray-700"/>
                <label htmlFor="minmax-range"
                       className="text2 block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Количество
                    затраченной еды в первый день: {materialPerDay} (шт)</label>
                <input id="minmax-range" type="range" min="0" max="10" value={materialPerDay} onChange={(e) => {
                    setMaterialPerDay(e.target.value)
                }} className="w-full h-2 bg-gray-200 rounded-lg accent-green-400 dark:bg-gray-700"/>

                {/*</Container>*/}
                <button
                    className="btn1 w-full shadow bg-green-400 hover:bg-orange-800 mt-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    data-modal-toggle="popup-modal"
                    onClick={() => {
                        setShowModal(true);
                        getMaterialUsage({
                            data: {
                                maxMaterialCount: maxMaterialCount,
                                materialPerDay: materialPerDay,
                                days: days,
                                listOfMaterials: listOfMaterials
                            },
                            set_chart_data: setChartData,
                            set_checked: setChecked,
                            set_days_left: setDays
                        });
                    }}
                >
                    Рассчитать
                </button>
            </form>

            <ChartModal showModal={showModal}
                        setShowModal={setShowModal}
                        chartReference={chartReference}
                        options={options}
                        chartData={chartData}/>
        </div>
    );
}

export default App;
