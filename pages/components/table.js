const Table = () => {
    const list = [
        {   Tasks: "Test",
            Category: "Test",
            Deadline: "29 June",
            Actions: "Delete"
        }, {
            Tasks: "Test4",
            Category: "Test",
            Deadline: "29 June",
            Actions: "Delete"
        }
    ]
    
    return (
        <table className="table">
            <thead>
                <th>Tasks</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Actions</th>
            </thead>
            <tr>
                
            </tr>
        </table>
    )
}

export default Table;