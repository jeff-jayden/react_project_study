import {Game} from "./game/game";
import {Comment} from './comment/comment'
import {PropsTransferZ2F} from './study/props_transfer'
import A2B from './study/props_transfer'

export default function App() {
    return (
        <>
            <Game></Game>
            <br/>
            --------------------------------------------------------------
            {/*<Comment></Comment>*/}
            --------------------------------------------------------------
            <PropsTransferZ2F></PropsTransferZ2F>
            --------------------------------------------------------------
            <A2B></A2B>
        </>
    )
}