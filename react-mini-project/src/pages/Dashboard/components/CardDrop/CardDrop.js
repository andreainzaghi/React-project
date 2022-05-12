import "./CardDrop.css";
export const CardDrop = (props) => {
    const pokemondetailsimg = props.details.data.sprites.other['official-artwork'].front_default
    const pokemondetailsmove = props.details.data.moves[0].move.name
    const pokemondetailsname = props.details.data.forms[0].name
    return (
        <div className="w-2/3 m-auto border-solid border-2 border-neutral-200 h-4/5 flex items-center justify-center rounded-3xl backgroundblue" id="conteinerDrop">
            <div>
                <div className="flex w-full justify-around items-center">
                    <h1 className="text-3xl font-bold text-white">{pokemondetailsname}</h1>


                </div>

                <img src={pokemondetailsimg} alt="" />
                <div className="w-full text-center bg-white p-4">
                    <p >MOSSE</p>
                    <p>{pokemondetailsmove}</p>
                </div>

            </div>

        </div>
    )
}