import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


const TicketCard = () => {

    return (
        <div className="flex flex-col bg-card hover rounded-full rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket title</h4>
            <h1 className="h-px border-0 bg-page mb-2" />
            <p>This is the ticket description ! please do this ticket</p>
            <div className="flex-grow">

            </div>
            <div className="flex mt-2"></div>
            <div className="flex flex-col">
                <p className="text-xs my-1">08/3/2024 1:30pm</p>
                <ProgressDisplay />
            </div>
            <div className="ml-auto flex items-end">
                <StatusDisplay />
            </div>
        </div>
    )
}

export default TicketCard