let indexarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Dynamicizam() {
    return (
        <>
            {indexarray.map((index, value, array) => {
                return (
                    <div key={index}>

                        <h1>{value}</h1>

                    </div>
                )
            })}

        </>
    );
}
export default Dynamicizam;