import Image from "next/image";
import TicketCard from "./(componets)/TicketCard";

export default function Dashboard() {
  return (
   <div className="p-5">
    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    
    </div>
   
   </div>
  );
}
