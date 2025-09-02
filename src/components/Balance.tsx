function Balance({balance}){
    return(
        <div className='h-max'>
            <div className='min-h-[100px]'>graph</div>
            <div className=''>{balance.toFixed(2)}$</div>
        </div>
    );
}

export default Balance