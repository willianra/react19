import {CardList} from "../components/CardList" 
import { CardList2 } from "../components/CardList2"
 
export const Home=()=>{
    return (<main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
        <div className="bg-amber-400 mx-auto w-full max-w- 3xl"> 
            <h1 className="bg-red text-3xl font-bold text-center mb-8">react 19 - teoria willian</h1> 
        <CardList2/>
        </div>
    </main>)
}