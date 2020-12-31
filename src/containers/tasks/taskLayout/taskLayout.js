import { TaskLayoutStyled, Title, Subtitle, Content, ButtonDelete } from "./taskLayout.styled";
const TaskLayout = props => {
    
    return (
        <TaskLayoutStyled color={props.color}>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Content>{props.content}</Content>
            <ButtonDelete onClick={props.methodDelete}>Delete</ButtonDelete>
        </TaskLayoutStyled>
    );
}

export default TaskLayout;