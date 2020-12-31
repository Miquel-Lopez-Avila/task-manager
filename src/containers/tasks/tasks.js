import { useState, useContext, useEffect } from "react";
import TaskLayout from "./taskLayout/taskLayout";
import { TaskContainer, PanelTasks, PanelCrateTask, Title, Inputs, Button, ButtonADD, TextArea, ButtonColorsContainer, ButtonColor, ButtonBlue, ButtonPink } from "./tasks.styled";
import { I18nContext } from "../../config/language/index";
import axios from "../../axios-orders";
import Spinner from "../../components/spinner/spinner";


const Tasks = () => {
    const { messages, language } = useContext(I18nContext);

    const [task, setTask] = useState({
        tasks: {
            title: '',
            subtitle: '',
            content: '',
            colorTaskChoosen: '#00609e',
        }
        ,
        colectionPosts: [],
        displayPanel: false,
        loading: false,
    });
    const setLoading = loading => setTask({
        ...task,
        loading,
    });
    const getTasks = () => {
        setLoading(true);
        axios.get('/orders.json')
            .then(response => {
                if (response.data) {
                    console.log('aa')
                    const formatTasks = tasks => Object.entries(tasks).map(([id, task]) => ({ id, ...task }));
                    setTask({
                        tasks: task.tasks,
                        colectionPosts: formatTasks(response.data).reverse(),
                        displayPanel: false,
                        loading: false,
                    });
                }else{
                    setLoading(false);
                }
                if (!response.data) {
                    setTask({
                       ...task,
                        colectionPosts: [],

                    });
                }

            })
            .catch(error => console.log(error));

    }
    useEffect(() => {
        getTasks();
    }, []);

    /* const postTask = () => {
        const Tasks = task.tasks;
        const colectionTasks = [...task.colectionPosts];
        colectionTasks.push(Tasks);

        setTask({
            tasks: {
                title: '',
                subtitle: '',
                content: '',
                colorTaskChoosen: '#00609e',

            },
            colectionPosts: colectionTasks,
            displayPanel: false,
        });
    } */

    const deletePost = (id) => {
        /* const tasksValues = {
            ...task.tasks
        }
        const colectionTasks = [...task.colectionPosts];
        colectionTasks.splice(key, 1);

        setTask({
            tasks: tasksValues,
            colectionPosts: colectionTasks,
            displayPanel: false,
        }); */
        setLoading(true);
        axios.delete("/orders/" + id + ".json").then(getTasks,()=> setLoading(false)).catch(error => console.log(error))
    }

    const buildTask = ({ target }, name) => {
        const tasksModify = {
            ...task.tasks
        }
        const newTask = { ...tasksModify, [name]: target.value };
        const colectionPosts = [...task.colectionPosts];
        setTask({
            tasks: newTask,
            colectionPosts: colectionPosts,
            displayPanel: true,

        });
    }

    const colorTask = (color) => {
        const tasksSave = {
            ...task.tasks
        };
        const setColor = { ...task.tasks, ['colorTaskChoosen']: color };
        const allPosts = [
            ...task.colectionPosts
        ];
        setTask({
            tasks: setColor,
            colectionPosts: allPosts,
            displayPanel: true,
        });
    }

    const displayPanelCrateTask = (displayValue) => {
        setTask({
            ...task,
            displayPanel: displayValue,
        });
    }

    const storeData = () => {

        const storingTask = {
            title: task.tasks.title,
            subtitle: task.tasks.subtitle,
            content: task.tasks.content,
            colorTaskChoosen: task.tasks.colorTaskChoosen,
        }
        setLoading(true);
        axios.post('/orders.json', storingTask)
            .then(getTasks)
            .finally(() => setLoading(false));
    }

    let showView = task.colectionPosts.map((theTask) =>
        <TaskLayout
            key={theTask.id}
            title={theTask.title}
            subtitle={theTask.subtitle}
            content={theTask.content}
            methodDelete={() => deletePost(theTask.id)}
            color={theTask.colorTaskChoosen}
        />);
    if (task.loading) {
        showView = <Spinner />
    }

    return (

        <TaskContainer>
            <PanelTasks>
                {showView}
            </PanelTasks>
            <PanelCrateTask displayPanel={task.displayPanel}>
                <Title>{messages[language].titleBuildTask}</Title>
                <label>{messages[language].titleTask}</label>
                <Inputs type='text' placeholder='Title' value={task.tasks.title} onChange={(event) => buildTask(event, 'title')} />
                <label>{messages[language].subTitleTask}</label>
                <Inputs type='text' placeholder='Sub-Title' value={task.tasks.subtitle} onChange={(event) => buildTask(event, 'subtitle')} />
                <label>{messages[language].contentTask}</label>
                <TextArea type='text' placeholder='Content of the task' value={task.tasks.content} onChange={(event) => buildTask(event, 'content')} />
                <ButtonColorsContainer>
                    <ButtonBlue onClick={() => colorTask('#00609e')}>{messages[language].buttonColorBlue}</ButtonBlue>
                    <ButtonPink onClick={() => colorTask('pink')}>{messages[language].buttonColorPink}</ButtonPink>
                    <ButtonColor onClick={() => colorTask('#00800091')}>{messages[language].buttonColorGreen}</ButtonColor>
                </ButtonColorsContainer>
                <Button onClick={storeData}>Post task</Button>
            </PanelCrateTask>
            <ButtonADD displayPanel={task.displayPanel} onClick={() => displayPanelCrateTask(true)}>{messages[language].add}</ButtonADD>
        </TaskContainer>
    );
}

export default Tasks;