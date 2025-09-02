import Balance from './Balance'

function Home(){
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="bg-zinc-200 rounded-lg shadow-xl border-1 border-gray-400 min-h-[150px] col-span-2 row-span-3">main</div>
            <div className="bg-zinc-200 rounded-lg shadow-xl border-1 border-gray-400 min-h-[150px]"><Balance balance={134.04} /></div>
            <div className="bg-zinc-200 rounded-lg shadow-xl border-1 border-gray-400 min-h-[150px]">income vs expenses</div>
            <div className="bg-zinc-200 rounded-lg shadow-xl border-1 border-gray-400 min-h-[150px]">transaction history</div>
        </div>
    )
}

export default Home