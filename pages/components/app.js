import Header from "./header";
import Table from "./table";

const App = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <h1 className="mt-5"> Hey <strong>Marisa! </strong></h1>
                <div className="mt-5">
                <Table/>
            </div>
            </div>

        </>
    )
}

export default App;