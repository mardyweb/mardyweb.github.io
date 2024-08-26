const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<Component />);

function Component() {

    const [counters, setCounters] = React.useState([]);  // counters is initialised as an empty array

    function createCounter() { //this function adds a new counter to the array counters and is called when the create counter button is clicked
        setCounters([
            ...counters, {
                id: counters.length + 1, //the new counter added has a specific id and value
                value: 0
            }
        ]);
    }

    function incrementCounter(index) {
        const newCounters = counters.map((counter, i) => {
            if (i === index) {
                return { ...counter, value: counter.value + 1 };
            }
            return counter;
        });
        setCounters(newCounters);
    }

   
    return (
        <div className="container">
            <div className="d-flex justify-content-center my-4">
                <button className="btn btn-primary" type="button" onClick={createCounter}>Create Counter</button>
            </div>

            <div className="row g-4">

                {counters.map((counter, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={counter.id}>
                <div className="card text-center h-100">
                <div className="card-body">
                <h5 className="card-title">Counter {counter.id}</h5>
                <p className="card-text display-4">{counter.value}</p>
                <button onClick={() => incrementCounter(index)} className="btn btn-success">Increment</button>
                </div>
                </div>
                </div>
                ))}

            </div>
            
        </div>
    );
    
}
